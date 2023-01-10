import React from 'react'
import axios from 'axios';

import { CustomerContext } from '../../contexts/CustomerContext'
import { OrderContext, compileCheckout } from '../../contexts/OrderContext';
import Button from '../../../common/components/Button';

export default function VatNumberEntry() {
    const [customer, setCustomer] = React.useContext(CustomerContext);
    const [order, setOrder] = React.useContext(OrderContext);
    const [error, setError] = React.useState();
    const [submitting, setSubmitting] = React.useState(false);

    const setVatNumber = async () => {
        setSubmitting(true);
        const vatValue = document.getElementById('vat-number-input').value;
        var payload = {
            userId: customer.accountId,
            userType: 'Contact',
            number: vatValue,
            country: customer.address.countryCode
        };
        const res = await axios.post('https://backend.borisfx.com/checkout/check_vat', payload);
        var result = res.data;
        if (result.error == 'INVALID_INPUT') {
            setError('Invalid VAT Number. Please check your formatting.');
        }
        else if (result.error) {
            console.log(result.error);
            setError('Unable to verify VAT number. Please try again in a few minutes.');
        }
        else if (!result.valid) {
            setError('No match found for given VAT Number. Please confirm your info and try again. ' + 
                '(Tip: try removing your country code and any special characters)');
        }
        else {
            let customerNew = {...customer};
            customerNew.vatNumber = result.vatNumber;
            setCustomer(customerNew);
            await setTaxRate(customerNew);
        }
        setSubmitting(false);
    }

    const setTaxRate = async customer => {
        let taxRate;
        if (customer.vatNumber) taxRate = 0;
        else{
            const isUS = customer.gatewayName.includes('US');
            const taxRates = isUS ? taxes['bfx'] : taxes['imagineer'];
            const key = isUS ? customer.address.state : customer.address.country;
            taxRate = taxRates[key] || 0;
        }

        const orderTemp = {...order, taxRate:taxRate};
        const checkout = await order.shopifyClient.checkout.fetch(order.checkoutId);   
        const orderNew = await compileCheckout(orderTemp, order.checkoutId);
        setOrder(orderNew);
    }

    let content;
    if (!customer.vatNumber){
        content = (
            <div className="form-group" >
                <label>VAT Id Number</label>
                <div className="input-group" v-if="!vat.valid">
                    <div className="input-group-addon">
                        <span className="input-group-text">{customer.address.countryCode}</span>
                    </div>
                    <input type="text" className="form-control" id="vat-number-input" />
                    <div className="input-group-append">
                        <Button className="btn btn-outline-secondary" type="button" label='Verify' processingLabel='Verifying'
                            processing={submitting} style={{fontSize:'1rem', marginTop:'0'}} onClick={setVatNumber} />
                    </div>
                </div>
                {error &&(
                    <div style={{color: 'red', fontSize: '.8rem'}}>
                        { error }
                    </div>
                )}
            </div>
        )
    }
    else{
        content = (
            <div className="form-group font-weight-bold" v-if="vat.valid">
                <label>VAT Id Number</label>
                <input type="text" readOnly className="form-control-plaintext" value={'Verified: ' + customer.vatNumber} />
            </div>
        )
    }

    return content;
}
