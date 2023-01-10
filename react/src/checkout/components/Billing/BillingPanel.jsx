import React from 'react'
import Client from 'shopify-buy'
import { CustomerContext } from '../../contexts/CustomerContext'

import BillingAddressForm from './BillingAddressForm'
import PaymentMethodSelect from './PaymentMethodSelect'

import { useStripe } from '@stripe/react-stripe-js'
import { compileCheckout, OrderContext } from '../../contexts/OrderContext'
import axios from 'axios'
import SpinnerOverlay from '../../../common/components/SpinnerOverlay'
import taxes from '../../data/taxes'
import { ErrorContext } from '../../../common/contexts/ErrorContext'

const loginJson = Cookies.get('bfx-login');
const login = loginJson ? JSON.parse(loginJson) : {};

export default function BillingPanel(props) {
    const {checkoutId, shopifyClient, ...rest} = props;
    const [customer, setCustomer] = React.useContext(CustomerContext);
    const [order, setOrder] = React.useContext(OrderContext)
    const [error, setError] = React.useContext(ErrorContext);
    const stripe = useStripe();
    //Supported page names: address; payment-method
    const [page, setPage] = React.useState('address');
    const [submitting, setSubmitting] = React.useState(false);
    const [loadingMessage, setLoadingMessage] = React.useState('Please Wait');
    
    //INIT

    const handleAddressSave = async (event) => {
        setSubmitting(true);
        try{
            event.preventDefault();
            let address = {};
            const formData = new FormData(event.target);
            formData.forEach((value, key) => address[key] = value);
            const payload = {address}
            const res = await axios.post('https://backend.borisfx.com/stripe_customer/address', payload, { auth: { username: login.email, password: login.token } })
            await setTaxRate(res.data);
            setCustomer(res.data);
            setPage('payment-method');
        }
        catch(err){
            setError({variant: 'error', message: 'Failed to Save Billing Address\nPlease review your information and try again.'})
        }
        setSubmitting(false);
    }
    
    const handleAddressConfirm = async () => {
        setSubmitting(true);
        await setTaxRate(customer);
        setPage('payment-method');
        setSubmitting(false);
    }

    const setTaxRate = async customer => {
        let taxRate;
        const isUS = customer.gatewayName.includes('US');
        if (!isUS && customer.vatNumber) taxRate = 0;
        else{
            console.log('Is US: ' + isUS);
            const taxRates = isUS ? taxes['bfx'] : taxes['imagineer'];
            console.log('Tax Rates:');
            console.log(taxRates);
            const key = isUS ? customer.address.state : customer.address.country;
            console.log('key: ' + key);
            taxRate = taxRates[key] || 0;
            console.log(taxRate);
        }

        const orderTemp = {...order, taxRate:taxRate};
        const orderNew = await compileCheckout(orderTemp, order.checkoutId);
        setOrder(orderNew);
    }

    const handleOrderSubmit = async pmId => {
        setSubmitting(true);
        try{
            const intent = await getPaymentIntent(customer, order);
            const payload = compileOrder(order, customer, intent);
            payload.pmId = pmId;
            await axios.post('https://backend.borisfx.com/checkout/order', payload, { auth: { username: login.email, password:login.token } });
            poll(order.checkoutId, intent);
        }
        catch(err){
            setError({variant: 'error', message: 'Failed to Initialize Order\nPlease wait a few minutes and try again.'})
            setSubmitting(false);
        }
    }

    const poll = async (checkoutId, paymentIntent) => {
        var uri = 'https://backend.borisfx.com/checkout/poll?id=' + encodeURIComponent(checkoutId)
        const res = await axios.get(uri)
        const statusText = statusLabels[res.data.status];
        setLoadingMessage(statusText);
        if (pollingCompleteStatuses.includes(res.data.status)) {
            handlePollingResponse(res.data);
        }
        else if (pollingErrorStatuses.includes(res.data.status)){
            handlePollingError(res.data);
        }
        else {
            setTimeout(() => poll(checkoutId), 2000);
        }
    }
    
    const handlePollingResponse = (data, paymentIntent) => { 
        if (data.status == '3dsecure required') {
            initiate3dSecure(paymentIntent);
        }
        else if (data.status == 'complete' || data.status == 'fulfillment failed') {
            setLoadingMessage('Complete!')
            const orderId = data.order ? data.order.orderId : null;
            completeOrder(order, orderId)
        }
        
    }
    
    const handlePollingError = data => {
        switch(data.status){
            case 'init failed':
                setError({variant:'error', message:'Order failed to initialize. Please review your information and try again.'});
                break;
            case 'payment failed':
                setError({variant: 'error', message: 'We were unable to process your payment. Please review your information and try again.\nError: ' + data.error});
                break;
        }
        setSubmitting(false);
    }
    
    const initiate3dSecure = async paymentIntent => {
        const res = await stripe.handleCardAction(paymentIntent.clientSecret)
        if (res.error) {
            setError({variant: 'error', message: res.error.message});
            setSubmitting(false);
            setLoadingMessage('Please Wait');
        }
        //Continue Processing Order
        else {
            const payload = compileOrder(order, customer, paymentIntent);
            await axios.post('https://backend.borisfx.com/checkout/intent-auth', payload);
            poll();
        }
    }

    let content;
    if (page == 'address'){
        content = 
            <BillingAddressForm onSave={handleAddressSave} onConfirm={handleAddressConfirm} />
    }
    else if (page == 'payment-method'){
        content = 
            <PaymentMethodSelect onSave={handleOrderSubmit} />
    }

    // #RENDER
    return (
        <div className="p-3 h-100">
            <SpinnerOverlay hidden={!submitting} message={loadingMessage}>
                {content} 
            </SpinnerOverlay>
        </div>
    )
}

const pollingCompleteStatuses = ['complete', '3dsecure required', 'fulfillment failed'];
const pollingErrorStatuses = ['init failed', 'payment failed'];
const statusLabels = {
    'initializing' : 'Initializing Order',
    'processing payment' : 'Processing Payment',
    'fulfilling' : 'Fulfilling Order',
    '3dsecure required' : 'Additional Action Required',
    'complete' : 'Order Complete!',
    'fulfillment failed' : 'Order Complete!',
    'init failed' : 'Initialization Error',
    'payment failed' : 'Payment Failed'
};

const getPaymentIntent = async (customer, order) => {
    if (order.total == 0) return null;
    var payload = {
        checkoutId: order.checkoutId,
        gatewayId: customer.gatewayId,
        customerId: customer.stripeId,
        amount: order.total * 100,
    }
    const res = await axios.post('https://backend.borisfx.com/checkout/intent', payload, { auth: { username: login.email, password:login.token } });
    return res.data;
}

const compileOrder = (order, customer, intent) => {
    const data = {
        date: new Date().getTime() / 1000,
        address: {
            line1: customer.address.street,
            city: customer.address.city,
            state: customer.address.stateCode,
            country: customer.address.countryCode,
            zip : customer.address.postalCode
        },
        firstName: customer.firstName,
        lastName: customer.lastName,
        company: customer.company,
        email: customer.email,
        lineItems: order.lineItems,
        discountCode: order.discountCode,
        total: parseFloat(order.total),
        amount: parseFloat(order.total) * 100,
        //invoiceFrom: customer.gatewayName.includes('US Stripe') ? 'Boris FX' : 'Imagineer',
        invoiceFrom: 'Boris FX',
        checkoutId: order.checkoutId,
        gatewayId: customer.gatewayId,
        isTest: customer.isTestGateway,
        intent: intent,
        pmId: '',
        autorenew: order.autorenew || false
    }
    return data;
}

const completeOrder = async (order, orderId) => {
    Cookies.remove('bfx-checkout-id');
    await order.shopifyClient.checkout.removeLineItems(order.checkoutId, order.lineItems[0].id);
    captureConversion(order, orderId);
    window.location.href = '/store/checkout-success';
}

const captureConversion = (order, orderId) => {
    try {
        const ga = googleAnalyticsInit();
        addGAProducts(ga, order.lineItems);
        addGAConversion(ga, order, orderId);
        addGASendPageview(ga);
        addGTMConversion(order, orderId);
    } catch (err){}
},
googleAnalyticsInit = () => {
    const gaKey = window["GoogleAnalyticsObject"] || "ga";
    const ga = window[gaKey] || function () {
        (window[gaKey]["q"] = window[gaKey]["q"] || []).push(arguments);
    };
    window[gaKey] = ga;
    return ga;
}
const addGAProducts = (ga, lineItems) => {
    try {
        var countLineItems = lineItems.length;
        var itrLineItems = 0;
        for (itrLineItems = 0; itrLineItems < countLineItems; ++itrLineItems) {
            var thisLineItem = {
                'id': lineItems[itrLineItems].variant.sku,
                'name': lineItems[itrLineItems].title + " / " + lineItems[itrLineItems].variant.title,
                'category': lineItems[itrLineItems].title + " / " + lineItems[itrLineItems].variant.title,
                'brand': 'BorisFX',
                'variant': lineItems[itrLineItems].variant.title,
                'price': lineItems[itrLineItems].variant.priceV2.amount,
                'quantity': lineItems[itrLineItems].quantity
            };
            ga(function () {
                ga.getAll().forEach(function (t) {
                    ga(t.get("name") + ".ec:addProduct", thisLineItem);
                });
            });
        }
    }
    catch (err) { console.error('GAProducts: ' + err.message); }
}
const addGAConversion = (ga, order, orderId) => {
    try {
        var thisTotal = order.total;
        var thisTax = order.taxes;
        var thisorderid = orderId;
        var thisPurchase = {
            'id': thisorderid,
            'affiliation': 'Webshop',
            'revenue': thisTotal,
            'tax': thisTax,
            'shipping': 0,
            'coupon': order.discountCode,    // User added a coupon at checkout.
            'list': 'borisfx-com-purchase'
        };
        ga(function () {
            ga.getAll().forEach(function (t) {
                ga(t.get("name") + ".ec:setAction", 'purchase', thisPurchase);
            });
        });
    }
    catch (err) { console.error('GAConversion: ' + err.message); }
}
const gtmCheckoutEvent = (lineItems, step) => {
    var self = this;
    try {
        var products = [];
        for (var li of lineItems) {
            var titleSplit = li.variant.title.split(' / ');
            var host = titleSplit.length == 2 ? titleSplit[0] : null;
            var type = titleSplit.length == 2 ? titleSplit[1] : titleSplit[0];

            products.push({
                'name': li.variant.product.title,
                'id': li.variant.sku,
                'price': li.price,
                'category': host ? host.replaceAll('/', ' + ') : null,
                'variant': type,
                'quantity': li.quantity
            });
        }

        dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        dataLayer.push({
            'event': 'checkout',
            'ecommerce': {
                'checkout': {
                    'actionField': { 'step': step },
                    'products': products
                }
            }
        });
    }
    catch (err) {
        console.error('CheckoutEvent: ' + err.message);
    }
}
const addGTMConversion = (order, orderId) => {
    var dataLayer = window.dataLayer = window.dataLayer || [];
    try {
        var thisTotal = order.total;
        var thisTax = order.taxes;
        var thisorderid = orderId;

        var products = [];
        for (var li of order.lineItems) {
            var titleSplit = li.variant.title.split(' / ');
            var host = titleSplit.length == 2 ? titleSplit[0] : null;
            var type = titleSplit.length == 2 ? titleSplit[1] : titleSplit[0];

            products.push({
                'name': li.variant.product.title,
                'id': li.variant.sku,
                'price': li.price,
                'category': host ? host.replaceAll('/', ' + ') : null,
                'variant': type,
                'event': 'purchase',
                'ecommerce': {
                    'purchase': {
                        'actionField': {
                            'id': thisorderid,            // Transaction ID. Required for purchases and refunds.
                            'affiliation': 'Webshop',
                            'revenue': thisTotal,          // Total transaction value (incl. tax and shipping)
                            'tax': thisTax,
                            'shipping': 0,
                            'coupon': order.discountCode
                        },
                        'products': products
                    }
                }
            });
        }
    }
    catch (err) {
        console.error('GTMConversion: ' + err.message);
    }
}
const addGASendPageview = ga => {
    try {
        ga.getAll().forEach(function (t) {
            ga(t.get("name") + ".send", 'pageview');
        });
    }
    catch (err) { }
}