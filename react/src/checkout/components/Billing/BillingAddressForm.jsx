import React from 'react'
import axios from 'axios';

import CountryStateSelect from '../../../common/components/CountryStateSelect'
import { CustomerContext } from '../../contexts/CustomerContext';

export default function BillingAddressForm(props) {
    const {onSave, onConfirm, Client, ...rest} = props;
    const [customer, setCustomer] = React.useContext(CustomerContext);
    const [editMode, setEditMode] = React.useState(false);

    React.useEffect(() => {
        resetForm(customer);
        setEditMode(customer.customerId == '')
    }, [customer])
    
    const handleCancelEdit = event => {
        resetForm(customer);
        setEditMode(false);
    }

    const handleSave = event => {
        onSave(event);
    }

    const enableEditMode = event => {
        setEditMode(true);
    }

    const handleConfirm = event => {
        onConfirm(event);
    }

    let footer;
    if (editMode){
        footer = (
            <div className="w-100 d-flex justify-content-end">
                {customer.customerId != '' && (
                    <div>
                        <button className="btn" type="button" onClick={handleCancelEdit}>Cancel</button>
                    </div>
                )}
                <div>
                    <button className="btn ml-2" type="submit">Save</button>
                </div>
            </div>
        )
    }
    else{
        footer = (
            <div className="w-100 d-flex justify-content-end">
                <div><button type="button" className="btn" onClick={enableEditMode}>Edit</button></div>
                <div><button type="button" className="btn ml-2" onClick={handleConfirm}>Confirm</button></div>
            </div>
        )
    }

    return (
        <div id="billing-info-section">
            <form id="checkout-billing-address-form" onSubmit={handleSave}>
                <fieldset disabled={!editMode}>
                    <div className="form-group m-0">
                        <h4>Invoicing Address</h4>
                        <p><em>Note: if you are purchasing on behalf of a business, please enter your business's
                            billing address.</em></p>
                        <input className="form-control" id="billing-address-1" name="line1"
                            placeholder="Line 1"
                            required />
                        <input className="form-control" id="billing-address-2" name="line2"
                            placeholder="Line 2 (Optional)"
                        />
                        <input className="form-control" id="billing-city" name="city"
                            placeholder="City" 
                            required />
                        <input className="form-control" id="billing-zip" name="zip"
                            placeholder="Zip/Postal Code"
                            required />
                        <CountryStateSelect hideLabels stateSelectName='state' countrySelectName='country' style={{margin: '0'}} />
                    </div>
                </fieldset>
                {footer}
            </form>
        </div>
    )
}

const resetForm = customer => {
    const form = document.getElementById('checkout-billing-address-form');
    if (!customer.customerId){
        form.reset();
        return;
    }

    form.line1.value = customer.address.street;
    form.line2.value = '';
    form.zip.value = customer.address.postalCode;
    form.city.value = customer.address.city;
    form.country.value = customer.address.countryCode;
    var event = new Event('change', { bubbles: true });
    form.country.dispatchEvent(event);
    setTimeout(() => {
        form.state.value = customer.address.stateCode
        form.state.dispatchEvent(event);
    }, 10);
}
