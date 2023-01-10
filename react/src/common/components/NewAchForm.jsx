import React from 'react'
import { usePlaidLink, PlaidLinkOnSuccess } from 'react-plaid-link';
import axios from 'axios'
import Button from './Button';
import { CustomerContext } from '../../checkout/contexts/CustomerContext';

export default function NewAchForm(props) {
    const [customer] = React.useContext(CustomerContext)
    const {data, publicToken, onSuccess, onError, ...rest} = props;
    const [selectedId, setSelectedId] = React.useState('');

    const handleChange = (event) => {
        setSelectedId(event.target.value);
    }

    const handleClick = async (event) => {
        try{
            const token = await fetchToken(selectedId, publicToken);
            await addPaymentMethod(token, customer.customerId, customer.gatewayId);
            onSuccess();
        }
        catch{
            onError();
        }
    }
    
    let options = []
    for (var i = 0; i < data.accounts.length; i++){
        const acc = data.accounts[i];
        options.push(
            <div className='form-check' key={acc.id}>
                <input className="form-check-input" type="radio" name='selectedPlaidAccount' 
                    id={acc.id} value={acc.id} onChange={handleChange} />
                <label className="form-check-label" htmlFor={acc.id}>{acc.name} ({acc.mask})</label>
            </div>
        )
    }

    return (
        <div>
            {options}
            <div>
                <Button onClick={handleClick} label="Add Payment Method" />
            </div>
        </div>
    );
}

const fetchToken = async(accountId, publicToken) => {
    const res = await axios.post('https://backend.borisfx.com/payment/bank_token', {accountId, publicToken})
    return res.data;
}

const addPaymentMethod = async(token, gatewayId, customerId) => {
    const payload = {token, gatewayId, customerId};
    try{
        await axios.post('https://backend.borisfx.com/payment_method/add', payload);
        return;
    }
    catch(err){
        console.error('failed: ' + err);
        return;
    }
}