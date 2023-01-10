import React from 'react'
import Modal from 'react-bootstrap/Modal';
import SuiteUpsell from './SuiteUpsell';

import '../../styles/upsell.css';

const defaultState = {upsellVariant: null};
export default function UpsellModal(props) {
    const {currentVariant, upsellPath, quantity, show, onConfirm, onCancel} = props;
    const [state, setState] = React.useState({...defaultState});
    const [submitting, setSubmitting] = React.useState(false);

    const {upsellVariant} = state;

    const handleCancel = async () => {
        setSubmitting(true);
        sendGTMEvent('reject', currentVariant);
        sendHubspotEvent(false, upsellPath.title, currentVariant, null, quantity)
        await onCancel();
        setSubmitting(false);
    };
    const handleConfirm = async () => {
        setSubmitting(true);
        sendGTMEvent('accept', currentVariant, upsellVariant, quantity);
        sendHubspotEvent(true, upsellPath.title, currentVariant, upsellVariant, quantity);
        await onConfirm(upsellVariant);
        setSubmitting(false);
    };

    React.useEffect(() => {
        const getSku = async () => {
            if (!upsellPath){
                setState({...state, upsellVariant: null});
                return;
            }
            if (upsellPath.title == 'Suite'){
                const sku = currentVariant.type == 'Monthly Subscription' ? 'SUITEM' : 'SUITES';
                const suiteVariant = await fetchUpgradeBySku(sku);
                setState({...state, upsellVariant : suiteVariant});
            }
        }
        getSku();
    }, [currentVariant, upsellPath]);


    return (
        <Modal contentClassName="upsell-modal-content" show={show && upsellVariant}>
            <SuiteUpsell isMonthly={currentVariant.type == 'Monthly Subscription'} currentVariant={currentVariant} suiteVariant={upsellVariant} onCancel={handleCancel}
                onConfirm={handleConfirm} />
        </Modal>
    )
}

const fetchUpgradeVariant = async (upsellPath, currentVariant) => {
    let data;
    if (upsellPath.sku) {data = await fetchUpgradeBySku(upsellPath.sku);}
    else {data = await fetchUpgradeByFilters(upsellPath.upsellProduct, currentVariant)};

    return data;
}

const fetchUpgradeBySku = async sku => {
    const res = await axios.get('https://backend.borisfx.com/shopify/variant?sku=' + sku);
    return res.data;
}

const fetchUpgradeByFilters = async (data, variantOld) => {
    const searchParam = data.product ? 'title=' + data.productTitle : 'id=' + variantOld.productId;
    const res = await axios.get('https://backend.borisfx.com/shopify/product?' + searchParam);
    var fetchedProd = res.data;
    for (var variantNew of fetchedProd.variants){
        const typeMatch = data.type ? data.type == variantNew.type : variantOld.type == variantNew.type;
        const hostMatch = data.host ? data.host == variantNew.host : variantOld.host == variantNew.host;
        if (typeMatch && hostMatch){
            return variantNew;
        }
    }
    return null;
}

const sendGTMEvent = (type, variant, variantNew=null, quantity) => {
    try{
        const payload = {
            'event' : type == 'accept' ? 'upsellAccept' : 'upsellReject',
            'ecUpsellCategory' : 'Suite',
        }
        if (type == 'accept' && variantNew){
            const varTotal = parseFloat(variant.price) * quantity;
            const newTotal = parseFloat(variantNew.price) * quantity;
            payload.ecUpsellValue = parseInt(newTotal - varTotal);
        }
        dataLayer.push(payload);
    }
    catch(err){
        console.error(err);
    }
}

const sendHubspotEvent = (accepted, type, variant, variantNew=null, quantity) => {
    try{
        const payload = {
            result : accepted ? 'accepted' : 'rejected',
            upsell_type: type,
            original_sku : variant.sku,
            original_product : variant.productTitle,
            original_host : variant.host,
            original_type : variant.type,
            original_value: variant.price * quantity
        }
        if (accepted && variantNew){
            payload.new_sku = variantNew.sku;
            payload.new_product = variantNew.productTitle;
            payload.new_host = variantNew.host;
            payload.new_type = variantNew.type;
            payload.new_value = variantNew.price * quantity;
            payload.value_added = payload.new_value - payload.original_value;
        }
        _hsq.push(["trackCustomBehavioralEvent", {
            name: "pe21305637_upsell_offer",
            properties: payload
        }]);
    }
    catch(err){
        console.error(err);
    }
}