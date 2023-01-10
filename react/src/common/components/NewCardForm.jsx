import React from 'react'
import axios from 'axios'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'

import StripeCardInput from './StripeCardInput'
import CountryStateSelect from './CountryStateSelect';
import Button from './Button';
import { CustomerContext } from '../../checkout/contexts/CustomerContext';

export default function NewCardForm(props) {
    const {onSuccess, onError} = props;
    const [submitting, setSubmitting] = React.useState(false);
    const [customer] = React.useContext(CustomerContext);
    const stripe = useStripe();
    const elements = useElements();
    const checkElementsData = async () => {
       var el = elements.getElement('card');
    }

    const handleSubmit = async event => {
        try{
            event.preventDefault();
            setSubmitting(true);
            let data = {}
            let form = document.getElementById('new-card-form');
            const formData = new FormData(form);
            formData.forEach((value, key) => data[key] = value);
            data.type = 'card';
            const card = elements.getElement('card', data=data);
            const token = await stripe.createToken(card);
            await sendNewCardRequest(token.token.id, customer);
            onSuccess();
        }
        catch(err){
            onError(err);
        }
        setSubmitting(false);
    }

    const elementOptions = {
        style:  {
            base: {
                fontSize: '16px'
            }   
        },
        hidePostalCode: true
    }

    return (
        <div>
            <form id="new-card-form" onSubmit={handleSubmit}>
                <div className="form-group m-1">
                    <div className="form-control"><StripeCardInput className='form-control' /></div>
                </div>
                <div className="form-group m-1">
                    <input className="form-control" name="name" placeholder={'Cardholder\'s Full Name'} />
                </div>
                <div className="form-group m-1">
                    <input className="form-control" name="address_line1" placeholder='Address' />
                </div>
                <div className="form-group m-1">
                    <input className="form-control" name="address_line2" placeholder={'Address 2'} />
                </div>
                <div className="form-group m-1">
                    <input className="form-control" name="address_city" placeholder={'City'} />
                </div>
                <CountryStateSelect hideLabels countrySelectName="address_country" 
                stateSelectName="address_state" style={{margin: '.25rem'}} />
                <div className="form-group m-1">
                    <input className="form-control" name="address_zip" placeholder={'Zip/Postal Code'} />
                </div>
                <Button submit='true' label="Submit" processingLabel="Please Wait..." processing={submitting} />
            </form>
        </div>
    )
}

const sendNewCardRequest = async (tokenId, customer) => {
    const payload = {
        token : tokenId,
        customerId : customer.customerId,
        gatewayId: customer.gatewayId
    };
    await axios.post('https://backend.borisfx.com/payment_method/add', payload);
}