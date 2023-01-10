import React from 'react'
import Cookies from 'js-cookie'
import { compileCheckout, OrderContext } from '../contexts/OrderContext'
import { CustomerContext } from '../contexts/CustomerContext'
import { ErrorContext } from '../../common/contexts/ErrorContext'
import Client from 'shopify-buy';
import axios from 'axios';
import StripeProvider from './StripeProvider';

import BillingPanel from './Billing/BillingPanel'
import OrderDetailsPanel from './OrderDetails/OrderDetailsPanel';
import SpinnerOverlay from '../../common/components/SpinnerOverlay';
import ErrorBanner from '../../common/components/ErrorBanner';

export default function Checkout() {
    const [customer, setCustomer] = React.useContext(CustomerContext);
    const [order, setOrder] = React.useContext(OrderContext);
    const [error, setError] = React.useContext(ErrorContext);
    const [errorState, setErrorState] = React.useState({visible: false, message :''});
    const [ready, setReady] = React.useState(false);

    React.useEffect(() => {
        const doInit = async () => {
            try{
                const loginJson = Cookies.get('bfx-login');
                if (!loginJson) {window.location.href = '/account/login?source=cart'; return;}
                const login = JSON.parse(loginJson);
                if(!login.email_verified) {window.location.href = '/account/verify-new'; return;}
                const cust = await fetchCustomer(login);

                const checkoutId = Cookies.get('bfx-checkout-id');
                let orderNew = await compileCheckout(order, checkoutId);
                setOrder(orderNew);
                if (cust){
                    setCustomer(cust);
                }
                else{
                    setCustomer({...customer, email: login.email});
                }
                setReady(true);
            }
            catch(err){
                console.error(err);
                setError({variant: 'error', message:'Failed to Initialize Checkout.'})
            }
        }
        doInit();
    }, []);

    React.useEffect(() => {
        const show = error.message != '';
        const errorStateNew = {visible: show, message: error.message};
        setErrorState(errorStateNew);
        if(show){
            setTimeout(() => {
                setErrorState({...errorStateNew, visible: false});
            }, 5000);
        }
    }, [error])

    return (
        <SpinnerOverlay hidden={ready} message='Loading Checkout. . .'>
            <div className="container h-100 p-3" style={{minHeight:'600px'}}>
                {ready && (
                <>
                <div className="row">
                    <div className="col-5">
                        <div className="branded-box h-100" style={{minHeight: '450px'}}>
                            <StripeProvider publicKey={customer.gatewayKey}>
                                <BillingPanel />
                            </StripeProvider>
                        </div>
                    </div>
                    <div className="col-7 pl-5">
                        <OrderDetailsPanel />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <p style={{fontSize: '.9rem'}} className="mt-3">Please note: Payment will be charged to your Boris FX account at
                        the confirmation of purchase. Subscriptions and Upgrade and Support plans will
                        automatically renew unless canceled at least 24 hours before the end of the current period. Your account
                        will be charged for any automatic
                        renewal within 24 hours prior to the end of the current period. You will be notified via email of an
                        upcoming automatic renewal 30 days prior
                        to the end of the current period for annual plans or 5 days prior for monthly plans. You can always
                        manage and cancel automated billing by
                        going to your Boris FX account settings after purchase.</p>
                    </div>
                </div>
                </>
                )}
                {!ready && (
                    <div className="row h-100">
                        <div className="col">
                        </div>
                    </div>
                )}
                <ErrorBanner visible={errorState.visible} error={errorState.message} />
            </div>
        </SpinnerOverlay>
    )
}

const fetchCustomer = async (login) => {
    const res = await axios.get('https://backend.borisfx.com/stripe_customer', { auth: { username: login.email, password: login.token } });
    return res.data;
}