import React from 'react'
import Client from 'shopify-buy';
import collections from '../data/collections';
import Cookies from 'js-cookie';

const PurchaseContext = React.createContext();

const client = Client.buildClient({
    domain: 'borisfx.myshopify.com',
    storefrontAccessToken: '3f231af7322de13fabe8e3e7ff3ef003'
});

const loginJson = Cookies.get('bfx-login');
let login;
if (loginJson){login = JSON.parse(loginJson);}

const PurchaseProvider = props => {
    const [state, setState] = React.useState({
        loading: true,
        shopifyClient: client,
        login : login,
        collectionId: '',
        defaults : {productIndex: 0, productName: null, host: null, type: null},
        productHtml: {__html: ''},
        serials : []
    });

    React.useEffect(() => {
        const doInit = async () => {
            const pageData = fetchPageData();
            let stateNew;
            if (pageData){
                const collectionData = findCollectionByName(pageData.collectionName);
                const collection = await client.collection.fetchWithProducts(collectionData.id);
                const pageDefaults = parseDefaults(pageData.defaults, collection);
                stateNew = {...state, collectionId: collection.id, defaults: pageDefaults}
            }
            else{
                const collection = await client.collection.fetchWithProducts(collections[0].id)
                const html = {__html: collection.products[0].descriptionHtml};
                stateNew = {...state, collectionId: collections[3].id, productHtml : html}
            }
            
            if (login){
                const serialResponse = await axios.post('https://backend.borisfx.com/renewals', login);
                stateNew.serials = compileSerials(serialResponse.data);
            }
            setState(stateNew);
        }
        doInit();
    }, [])

    return (
        <PurchaseContext.Provider value={[state, setState]}>
            {props.children}
        </PurchaseContext.Provider>
    )
}

const fetchPageData = () => {
    try{
        const data = {
            collectionName: '',
            defaults: {}
        };
        var params = new URLSearchParams(window.location.search);
        const appContainer = document.querySelector("div[id^='purchase-app'");
        data.collectionName = params.get('collection') || appContainer.dataset.defaultCollection;
        const collection = findCollectionByName(data.collectionName)
        const collDefaults = collection.defaults;
        data.defaults.product = params.get('product') || collDefaults.product;
        data.defaults.host = params.get('host') || collDefaults.host;
        data.defaults.type = params.get('purchase-options') || collDefaults.type;
        if (data.defaults.type == 'Subscription') data.defaults.subscriptionType = collDefaults.subscriptionType;

        return data;
    }
    catch(err){
        console.error('Failed to collect data: ' + err.toString());
        return null;
    }
}

const findCollectionByName = name => {
    const slug = slugify(name);
    const collection = collections.find(item => {
        return slug == item.slug;
    });
    return collection;
}

const compileSerials = (sfdcSerialJson) => {
    const sfdcSerials = JSON.parse(sfdcSerialJson);
    const result = {};
    sfdcSerials.licenses.forEach(contract => {
        result[contract.serial] = {
            serial: contract.serial,
            product : contract.family,
            host: contract.host,
            qty: contract.quantity,
            endDate: contract.endDate,
            contractType: contract.contractType,
            isLegacy: contract.isLegacy
        };
    });

    sfdcSerials.bundles.forEach(bundle => {
        var serialString = bundle.serials.toString().replace(/,/g, ' + ');
        result[serialString] = {
            serial: serialString,
            product : bundle.family,
            host : bundle.host,
            qty: bundle.quantity,
            endDate : bundle.endDate,
            contractType : contract.contractType,
            isLegacy : contract.isLegacy
        }
    });
    return result;
}

const parseDefaults = (defaults, collection) => {
    const defaultsNew = {...defaults};
    var product = collection.products.find(p => {
        return slugify(p.title) == slugify(defaults.product);
    })
    if(!product) return defaultsNew;
    defaultsNew.product = product.title;
    var temp_options = product.options;

    for (const o of temp_options){
        if (o.name == 'Host' && defaults.host){
            const hostValue = o.values.find(h => {
                return slugify(h.value) === slugify(defaults.host);
            })
            if(hostValue) {defaultsNew.host = hostValue.value;}
        }
        else if (o.name == 'Purchase Options' && defaults.type){
            const typeValue = o.values.find(t => {
                return slugify(t.value) === slugify(defaults.type);
            })
            if (!typeValue) continue;
            else if(typeValue == 'Monthly Subscription'){
                defaultsNew.type = 'Subscription';
                defaultsNew.subscriptionType = 'Monthly Subscription';
            }
            else if (typeValue == 'Annual Subscription'){
                defaultsNew.type = 'Subscription';
                defaultsNew.subscriptionType = 'Annual Subscription';
            }
            else{
                defaultsNew.type = typeValue.value;
            }
        }
    }
    return defaultsNew
}

const slugify = (text) => {
    return text.toString().toLowerCase()
	.replace(/\s+/g, '-')           // Replace spaces with -
	.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
	.replace(/\-\-+/g, '-')         // Replace multiple - with single -
	.replace(/^-+/, '')             // Trim - from start of text
	.replace(/-+$/, '');            // Trim - from end of text
}

export {PurchaseProvider, PurchaseContext};
