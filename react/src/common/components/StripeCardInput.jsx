import React from 'react'   
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

export default function StripeCardInput(props) {
    const stripe = useStripe();
    const elements = useElements();

    return (
        <div>
            <CardElement />
        </div>
    )
}
