import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React, { useEffect } from 'react'

export default function StripeProvider(props) {
    const [publicKey, setPublicKey] = React.useState('');
    const [stripePromise, setStripePromise] = React.useState(null); 
    useEffect(() => {
        if (publicKey == '') return;
        const prom = loadStripe(publicKey);
        setStripePromise(prom);
    }, [publicKey])
    if (publicKey != props.publicKey){
        setPublicKey(props.publicKey);
    }

    return (
        <Elements stripe={stripePromise}>
            {props.children}
        </Elements>
    )
}

