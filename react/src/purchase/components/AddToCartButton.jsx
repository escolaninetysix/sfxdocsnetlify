import React, { PureComponent } from 'react'
import upsellLogic from '../data/upsellLogic';
import Cookies from 'js-cookie';
import { PurchaseContext } from '../contexts/PurchaseContext';

import Button from '../../common/components/Button';
import ReinstatementModal from '../components/ReinstatementModal'
import UpsellModal from './upsell/UpsellModal';
import { ErrorContext } from '../../common/contexts/ErrorContext';

export default function AddToCartButton(props) {
    const {variant, quantity, serial, renewalVariants} = props;
    const [modal, setModal] = React.useState('');
    const [upsellPath, setUpsellPath] = React.useState(null);
    const [submitting, setSubmitting] = React.useState(false);
    
    const [{shopifyClient}] = React.useContext(PurchaseContext);
    const [error, setError] = React.useContext(ErrorContext);

    const isRenewalVariant = renewalVariantTitles.includes(variant.type);
    const serialNum = serial ? serial.serial : '';

    const handleClick = async event => {
        try{
            setSubmitting(true);
            const upPath = await selectUpgradePath(variant);
            if (isRenewalVariant && serial.isLegacy){
                setModal('reinstatement');
            }
            else if (upPath && upPath.title == 'Suite'){
                setModal('upsell');
                setUpsellPath(upPath);
            }
            else{
                await addToCart(variant.sdkId, quantity, serialNum);
                setSubmitting(false);
            }
        }
        catch(err){
            console.error(err);
            setError({variant: 'error', message: 'We were unable to add this item to your cart. Please try again.'})
        }
    }

    const addToCart = async (variantId, quantity, serial) => { 
        const storedCheckoutId = Cookies.get('bfx-checkout-id');
        const checkoutId = await fetchCheckout(storedCheckoutId);
        if (checkoutId != storedCheckoutId) Cookies.set('bfx-checkout-id', checkoutId);

        var lineItems = [{
            variantId: variantId,
            quantity: quantity,
            customAttributes : [{key: 'Current Serial Number', value: serial}]
        }];
    
        await shopifyClient.checkout.addLineItems(checkoutId, lineItems);
        //gaAddToCartEvent(variant, self.quantity);
        showCart();
    }

    const fetchCheckout = async checkoutId => {
        let checkout;
        if (checkoutId == null) checkout = await shopifyClient.checkout.create();
        else checkout = await shopifyClient.checkout.fetch(checkoutId)

        //Reattempt if creation or retrieval fails
        if (checkout.orderStatusUrl) checkout = await shopifyClient.checkout.create();
        return checkout.id;
    }

    const handleReinstatementConfirm = async event => {
        const varId = renewalVariants.reinstatement.sdkId
        await addToCart(varId, quantity, serialNum);
        setModal('');
        setSubmitting(false);
    }
    const handleReinstatementCancel = event => {
        setModal('');
        setSubmitting(false);
    }

    const handleUpsellConfirm = async upsellVariant => {
        await addToCart(upsellVariant.sdkId, quantity, '');
        setModal('');
        setSubmitting(false);
    }
    const handleUpsellCancel = async () => {
        await addToCart(variant.sdkId, quantity, serialNum);
        setModal('');
        setSubmitting(false);
    }

    return (
        <div>
            <Button processing={submitting} label="Add To Cart" onClick={handleClick} type="button"
                className='btn add-to-cart-button' processingLabel="Please Wait..." disabled={!variant} />
            <ReinstatementModal show={modal == 'reinstatement'} renewalVariant={renewalVariants.renewal}
                reinstatementVariant={renewalVariants.reinstatement} onConfirm={handleReinstatementConfirm} onCancel={handleReinstatementCancel} />
            <UpsellModal show={modal == 'upsell'} currentVariant={variant} upsellPath={upsellPath} 
            quantity={quantity} onConfirm={handleUpsellConfirm} onCancel={handleUpsellCancel} />
        </div>
    )

}

const renewalVariantTitles = ['Upgrade & Support Renewal', 'Upgrade & Support Reinstatement'];

const selectUpgradePath = async variant =>{
    try{
        let lineItems = [];
        var selectedOption;
        const checkoutId = Cookies.get('bfx-checkout-id');
        if (checkoutId){
            const checkout = await shopifyClient.checkout.fetch(checkoutId);
            lineItems = checkout.lineItems;
        }
        const upgradePath = upsellLogic.find(option => {
            return isValidUpgradePath(variant, option, lineItems);
        })
        return upgradePath;
    }
    catch(err){
        console.error(err);
    }
}
const isValidUpgradePath = (variant, option, lineItems) => {
    const matchingCartVariants = [];
    let match = true;
    for (const logicBlock of option.logic){
        for (const logicLine of logicBlock.logicLines){
            var toCompare = variant[logicLine.compareA];
            if (logicLine.search == 'product' && !compare(toCompare, logicLine.operator, logicLine.compareB)){
                match = false;
                break;
            }
            else if (logicLine.search == 'cart'){
                let matches = compareCart(lineItems, logicLine.compareA, logicLine.operator, logicLine.compareB);
                if (matches.length > 0) matchingCartVariants = matchingCartVariants.concat(matches);
                else {match = false; break;}
            }
        }
    }
    return match;
}

const compare = (compareA, operator, compareB) => {
    if (!compareA || !compareB) return false;
    const value = compareA.toLowerCase();
    const expected = compareB.split(',');

    const result = expected.find((e => {
        e = e.toLowerCase().trim();
        switch (operator) {
            case '>':   return value > e;
            case '<':   return value < e;
            case '>=':  return value >= e;
            case '<=':  return value <= e;
            case '==':  return value == e;
            case '!=':  return value != e;
            case '===': return value === e;
            case '!==': return value !== e;
            case 'contains': return value.includes(e);
        }
    }));

    return result != null;
}

const compareCart = (lineItems, compareA, operator, compareB) => {
    var matches = [];
    if (!lineItems) return matches;
    for (var item of lineItems){
        var toCompare = item[compareA];
        if (this.compare(toCompare, operator, compareB)) matches.push(item);
    }
    return matches;
}
