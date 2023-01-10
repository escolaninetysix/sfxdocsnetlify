import React, { Children } from 'react'
import Client from 'shopify-buy';

const OrderContext = React.createContext();

const client = Client.buildClient({
    domain: 'borisfx.myshopify.com',
    storefrontAccessToken: '3f231af7322de13fabe8e3e7ff3ef003'
});

const compileCheckout = async (order, checkoutId) => {
    const orderNew = {...order};
    const checkout = await client.checkout.fetch(checkoutId);
    orderNew.checkoutId = checkout.id;
    orderNew.lineItems = checkout.lineItems;
    if(checkout.discountApplications.length > 0){
        orderNew.discountCode = checkout.discountApplications[0].code;
        checkout.discountCodeApplicable = checkout.discountApplications[0].applicable;
    }
    else{
        orderNew.discountCode = '';
        orderNew.discountCodeApplicable = false;
    }
    var subtotalFloat = parseFloat(checkout.lineItemsSubtotalPrice.amount);
    var subtotalWithDiscount = parseFloat(checkout.subtotalPrice);
    var discountFloat = (subtotalFloat - subtotalWithDiscount) * -1 
    var taxFloat = subtotalWithDiscount * (order.taxRate / 100);
    var totalFloat = subtotalWithDiscount + taxFloat;

    orderNew.subtotal = subtotalFloat.toFixed(2);
    orderNew.discount = discountFloat.toFixed(2);
    orderNew.taxes = taxFloat.toFixed(2);
    orderNew.total = totalFloat.toFixed(2);

    return orderNew
}

const OrderProvider = props => {
    const [order, setOrder] = React.useState({
        shopifyClient: client,
        lineItems: [],
        checkoutId: undefined,
        discountCode: undefined,
        discountCodeApplicable: null,
        subtotal: '0.00',
        discount: '0.00',
        taxRate: 0,
        taxes: '0.00',
        total: '0.00',
        autorenew: false,
    });

    return (
        <OrderContext.Provider value={[order, setOrder]}>
            {props.children}
        </OrderContext.Provider>
    )
}

export {OrderProvider, OrderContext, compileCheckout};