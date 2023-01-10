import React from 'react'

import { PurchaseContext } from '../contexts/PurchaseContext'
import { ErrorContext } from '../../common/contexts/ErrorContext';
import SubscriptionSelect from './SubscriptionSelect';
import SerialSelect from './SerialSelect';
import AddToCartButton from './AddToCartButton';

import '../styles/product-select.css';

const initialProductState = {
    collection: {products : [], id: '', name: ''},
    product: {id: '', name: '', variants: [], hosts: [], types: [], html: {}},
    selections: {host: null, type: null, subscriptionType: ''},
    subscriptionVariants: {'monthly' : {}, 'annual' : {}},
    renewalVariants: {'renewal' : {}, 'reinstatement' : {}},
    serial: null,
    quantity: 1,
    submiting: false,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'RESET':
            return initialProductState;
        case 'RESET_PRODUCT':
            return {...initialProductState, collection: state.collection};
        case 'SET_COLLECTION':
            return {...state, collection: action.payload, product: initialProductState.product};
        case 'SET_PRODUCT':
            return {...initialProductState, collection: state.collection, product: action.payload};
        case 'SET_SELECTIONS':
            return {...state, selections: action.payload};
        case 'SET_SERIAL':
            return {...state, serial: action.payload};
        case 'SET_RENEWAL_OPTIONS':
            return {...state, renewalVariants: action.payload};
        case 'SET_SUBSCRIPTION_OPTIONS':
            return {...state, subscriptionVariants: action.payload};
        case 'quantity':
            return {...state, quantity: parseFloat(action.payload)};
        case 'SET_SUBMITTING':
            return {...state, submitting: action.payload};
    }
}

export default function ProductSelect(props) {    
    //STATE HOOKS
    //#state-hooks
    const [purchaseState, setPurchaseState] = React.useContext(PurchaseContext);
    const [productState, dispatch] = React.useReducer(reducer, initialProductState);
    const [error, setError] = React.useContext(ErrorContext);
    
    //PRE-RENDER CALCULATIONS
    const purchaseForm = React.useRef(null);
    const client = purchaseState.shopifyClient;
    const {product, collection, quantity, selections, subscriptionVariants} = productState;
    
    let selectedVariant = fetchVariant(product, selections);
    const price = quantity > 0 ? (parseFloat(selectedVariant.price) * quantity).toFixed(2) : '0.00';
    const compareAt = quantity > 0 ? (parseFloat(selectedVariant.compareAt) * quantity).toFixed(2) : '0.00';
    const isRenewalVariant = renewalVariantTitles.includes(productState.selections.type);
    const requiresManualSerialEntry = serialEntryTitles.includes(productState.selections.type);
    const isSalePrice = (selectedVariant && price != compareAt);
    
    //EFFECT HOOKS
    //#effect-hooks
    React.useEffect(() => {
        setPurchaseState({...purchaseState, loading: true});
        if (!purchaseState.collectionId){
            dispatch({type: 'RESET'});
            return;
        }

        const doInit = async () => {
            try{
                const {defaults} = purchaseState;
                const collectionNew = await fetchCollection(client, purchaseState.collectionId) || {};
                const defaultProductId = getDefaultProductId(collectionNew);
                const product = await fetchProduct(client, defaultProductId);
                const defaultSelections = {...productState.selections, host: defaults.host, type: defaults.type, subscriptionType: defaults.subscriptionType};
                dispatch({type: 'SET_COLLECTION', payload: collectionNew});
                dispatch({type: 'SET_PRODUCT', payload: product});
                dispatch({type: 'SET_SELECTIONS', payload: defaultSelections});
                setPurchaseState({...purchaseState, productHtml: product.html, loading: false});
                setDeepLink(collectionNew.name, product.name, defaultSelections);
            }
            catch(err){
                console.error(err);
                setError({variant: 'error', message: 'There was an error loading this product. Please try again.'})
            }
        }
        doInit();
    }, [purchaseState.collectionId, purchaseState.defaults])

    React.useEffect(() => {
        const form = purchaseForm.current;
        if (form.host) form.host.value = productState.selections.host || '';
        if (form.type) form.type.value = productState.selections.type || '';
        if (productState.selections.type == 'Subscription'){
            const subTypes = getSubscriptionVariants(productState.product, productState.selections);
            dispatch({type: 'SET_SUBSCRIPTION_OPTIONS', payload: subTypes});
        }
        else if (productState.selections.type == 'Upgrade & Support Renewal'){
            const renewalTypes = getRenewalVariants(productState.product, productState.selections);
            dispatch({type: 'SET_RENEWAL_OPTIONS', payload: renewalTypes});
        }
        setDeepLink(productState.collection.name, productState.product.name, productState.selections);
    }, [productState.selections]);

    React.useEffect(() => {
        const form = purchaseForm.current;
        form.product.value = productState.product.id;
        setDeepLink(productState.collection.name, productState.product.name, productState.selections);
    }, [productState.product])

    const getDefaultProductId = collection => {
        let product = {};
        const {defaults} = purchaseState;
        if (defaults.product){
            product = collection.products.find(prod => {
                return prod.name == defaults.product
            });
        }
        else if (defaults.productIndex){
            product = collection.products[defaults.productIndex];
        }
        else{
            product = collection.products[0];
        }
        return product.id;
    }

    //FORM CHANGE HANDLERS
    //form-change-handlers

    const handleProductChange = async event => {
        setPurchaseState({...purchaseState, loading: true});
        const productId = event.target.value;
        const product = await fetchProduct(client, productId);
        dispatch({type: 'SET_PRODUCT', payload: product});
        setPurchaseState({...purchaseState, productHtml: product.html, loading: false});
    }

    const handleOptionChange = event => {
        const selectionsNew = {...productState.selections, [event.target.name] : event.target.value};
        if (selectionsNew.type != 'Subscription'){selectionsNew.subscriptionType = null;}
        else if (selections.type != 'Subscription'){selectionsNew.subscriptionType = 'Annual Subscription';}

        if (selectionsNew.type != 'Upgrade & Support Renewal'){
            dispatch({type : 'SET_SERIAL', payload: initialProductState.serial});
        }
        dispatch({type : 'SET_SELECTIONS', payload: selectionsNew});
    }

    const handleSubscriptionChange = async event => {
        const subType = event.currentTarget.getAttribute('name');
        const selectionsNew = {...productState.selections, subscriptionType: subType}
        dispatch({type: 'SET_SELECTIONS', payload: selectionsNew});
    }

    const handleSerialChange = async event => {
        const serialString = event.target.value;
        let serial;

        if (!requiresManualSerialEntry){
            serial = purchaseState.serials[serialString];
        }
        else{
            serial = {'serial' : serialString};
        }
        dispatch({type: 'SET_SERIAL', payload: serial});
    }

    const handleQuantityChange = event => {
        event.preventDefault();
        const qtyInput = document.getElementById('purchase-qty');
        const data = event.target.dataset;

        let val = productState.quantity;
        if (data.qty == 'add'){
            val++;
        }
        else if (data.qty == 'subtract'){
            val--;
        }
        else {val = event.target.value;}
        dispatch({type: 'quantity', payload: val});
        qtyInput.value = val;
    }

    //DATA CALCULATION METHODS
    //#calculation-methods
    const productSelected = () => {
        return (
            selectedVariant.id != null &&
            (!isRenewalVariant || productState.serial)
        );
    }

    //Populate Select Options
    const productOptions = [];
    collection.products.forEach(prod => {
        productOptions.push(
            <option key={prod.id} value={prod.id}>{prod.name}</option>
        )
    })

    const hostOptions = [];
    product.hosts.forEach(host => {
        hostOptions.push(
            <option key={host} value={host}>{host}</option>
        )
    })

    const variantOptions = [];
    product.types.forEach(variant => {
        variantOptions.push(
            <option key={variant} value={variant}>{variant}</option>
        )
    })

    //RENDER
    //#render
    return (
        <div>
            <form ref={purchaseForm} id="purchase-form">
            <div className='form-group' hidden={!product.id}>
                <label>Product</label>
                <select className='form-control' name="product" onChange={handleProductChange}>
                    {productOptions}
                </select>
            </div>
            {hostOptions.length > 0 && (
                <div className='form-group'>
                    <label>Host</label>
                    <select className='form-control' name="host" onChange={handleOptionChange}>
                        <option value="">--- Select Host ---</option>
                        {hostOptions}
                    </select>
                </div>
            )}
            {variantOptions.length > 0 && (
                <div className='form-group'>
                <label>Purchase Options</label>
                    <select className='form-control' name="type" onChange={handleOptionChange}>
                        <option value="">--- Select Option ---</option>
                        {variantOptions}
                    </select>
                </div>
            )}
            {selections.type == 'Subscription' && (
                <div className='row'>
                    <div className="col-12">
                        <SubscriptionSelect onSelect={handleSubscriptionChange} selected={selections.subscriptionType}
                         monthlyVariant={subscriptionVariants.monthly} annualVariant={subscriptionVariants.annual} />
                    </div>
                </div>
            )}
            {isRenewalVariant && (
                <div className="row">
                    <div className="col-12">
                        <SerialSelect onChange={handleSerialChange} host={selections.host} product={product.name} />
                    </div>
                </div>
            )}
            {requiresManualSerialEntry && (
                <div className="row">
                    <div className="col-12">
                        <div className='form-group m-0'>
                            <label>Serial</label>
                            <input className='form-control' type="text" name="serial" onChange={handleSerialChange} />
                        </div>
                    </div>
                </div>
            )}
            {productSelected() &&(
                <>
                <div className='row mt-3'>
                    <div className='col-lg-4 col-12 d-flex'>
                        <div className="my-auto"><button data-qty="subtract" className="btn qty-button" onClick={handleQuantityChange}>-</button></div>
                        <div className="form-group my-auto">
                            <input id="purchase-qty" name="quantity" className='form-control' onChange={handleQuantityChange} defaultValue={1} />
                        </div>
                        <div className="my-auto"><button data-qty="add" className="btn qty-button" onClick={handleQuantityChange}>+</button></div>
                    </div>
                    <div className="col-lg-auto col-12 d-flex flex-column justify-content-end">
                        {!isSalePrice &&(
                            <div><span className='price-header'>Price: </span><span className="standard-price">${price} USD</span></div>
                            )}
                        {isSalePrice &&(
                            <>
                            <div><span><s>Price: ${compareAt} USD</s></span></div>
                            <div><span className="sale-price">SALE PRICE: ${price} USD</span></div>
                            </>
                        )}
                        <div><span>SKU: {selectedVariant.sku}</span></div>
                    </div>
                </div>
                <AddToCartButton variant={selectedVariant} quantity={productState.quantity} serial={productState.serial}
                    renewalVariants={productState.renewalVariants} />
                </>
            )}
            </form>
        </div>
    )
}
const renewalVariantTitles = ['Upgrade & Support Renewal', 'Upgrade & Support Reinstatement'];
const serialEntryTitles = ['Upgrade from particleIllusion 3', 'Upgrade From Previous Version'];

const setDeepLink = (collection, product, selections) => {
    if (!collection) return;
    const host = selections.host;
    const type = selections.subscriptionType ? selections.subscriptionType : selections.type;

    let url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?';
    url += 'collection=' + slugify(collection)
    if (product){
        url += '&product=' + slugify(product)
    }
    if (host){
        url += '&host=' + slugify(host)
    }
    if (type){
        url += '&purchase-options=' + slugify(type)
    }

    window.history.pushState({}, '', url);
}

const fetchCollection = async (client, collectionId) => {
    const fetchedCollection = await client.collection.fetchWithProducts(collectionId);
    const collectionNew = {
        products: [],
        id: fetchedCollection.id,
        name: fetchedCollection.title
    }
    fetchedCollection.products.forEach(prod => {
        collectionNew.products.push({name: prod.title, id: prod.id});
    })
    return collectionNew;
}

const fetchProduct = async (client, productId) => {
    const res = await axios.get(`https://backend.borisfx.com/shopify/product?id=${productId}`);
    const fetchedProduct = res.data;
    const variantData = compileVariants(fetchedProduct);
    const productNew = {
        id: productId,
        name: fetchedProduct.title,
        html: {__html : fetchedProduct.descriptionHtml},
        ...variantData
    }
    return productNew;
}

const fetchVariant = (product, selections) => {
    let host = selections.host || null;
    const purchaseOptions = product.variants[host];
    const variantNew = {};
    if (!purchaseOptions){
        return variantNew;
    } 
    let productType = selections.subscriptionType ? selections.subscriptionType : selections.type;
    if (!productType) productType = null;
    return purchaseOptions[productType] || {};
}

const getSubscriptionVariants =  (product, selections) => {
    const host = selections.host || null;
    const purchaseOptions = product.variants[host];
    const subOptionsNew = {};
    if (!purchaseOptions){
        return subOptionsNew
    }
    subOptionsNew.monthly = purchaseOptions['Monthly Subscription'];
    subOptionsNew.annual = purchaseOptions['Annual Subscription'];
    return subOptionsNew;
}

const getRenewalVariants =  (product, selections) => {
    const purchaseOptions = product.variants[selections.host];
    const renewalOptionsNew = {};
    if (!purchaseOptions){
        return renewalOptionsNew
    }
    renewalOptionsNew.renewal = purchaseOptions['Upgrade & Support Renewal'];
    renewalOptionsNew.reinstatement = purchaseOptions['Upgrade & Support Reinstatement'];
    return renewalOptionsNew;
}

const compileVariants = (product) => {
    const result = {variants : {}, hosts: [], types: []};
    const variants = result.variants;
    const hiddenTypes = ['Monthly Subscription', 'Upgrade & Support Reinstatement'];

    product.variants.forEach(vari => {
        const variNew = {...vari};
        
        if (vari.host && !result.hosts.includes(vari.host)){
            result.hosts.push(vari.host);
        }
        if (vari.type && !hiddenTypes.includes(vari.type)){
            let typeLabel = vari.type == 'Annual Subscription' ? 'Subscription' : vari.type;
            if (typeLabel == 'Upgrade/Support Renewal'){typeLabel = 'Upgrade & Support Renewal'}
            if (!result.types.includes(typeLabel)){result.types.push(typeLabel)};
        }

        if (!variants[variNew.host]) variants[variNew.host] = {};
        variants[variNew.host][variNew.type] = variNew;
    })
    return result;
}

const slugify = (text) => {
    return text.toString().toLowerCase()
	.replace(/\s+/g, '-')           // Replace spaces with -
	.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
	.replace(/\-\-+/g, '-')         // Replace multiple - with single -
	.replace(/^-+/, '')             // Trim - from start of text
	.replace(/-+$/, '');            // Trim - from end of text
}