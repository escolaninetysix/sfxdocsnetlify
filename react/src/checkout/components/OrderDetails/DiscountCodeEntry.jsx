import React from 'react'
import { compileCheckout, OrderContext } from '../../contexts/OrderContext'
import Button from '../../../common/components/Button';
import { ErrorContext } from '../../../common/contexts/ErrorContext';

export default function DiscountCodeEntry() {
    const [order, setOrder] = React.useContext(OrderContext);
    const [error, setError] = React.useContext(ErrorContext);
    const [submitting, setSubmitting] = React.useState(false);

    const setDiscountCode = async () => {
        setSubmitting(true);
        try{
            const client = order.shopifyClient;
            const codeInput = document.getElementById('discount-code-input');
            const code = codeInput.value;
            const checkout = await client.checkout.addDiscount(order.checkoutId, code);
            if (checkout.userErrors != null && checkout.userErrors.length > 0) {
                setError({variant : 'error', message:'Could not apply discount code: ' + (checkout.userErrors[0].message).replaceAll('Discount code ', '')});
                setSubmitting(false);
                return;
            }
            const orderNew = await compileCheckout(order, order.checkoutId);
            setOrder(orderNew);
        }
        catch(err){
            console.error(err);
            setError({variant : 'error', message: 'Could not apply discount code: Unknown Error'});
        }
        setSubmitting(false);
    }

    const clearDiscountCode = async () => {
        setSubmitting(true);
        const client = order.shopifyClient;
        const checkout = await client.checkout.removeDiscount(order.checkoutId);
        if (checkout.orderStatusUrl) {
            setError({variant : 'error', message:'Could not remove discount code'});
            return
        }
        
        const orderNew = await compileCheckout(order, order.checkoutId);
        setOrder(orderNew);
        setSubmitting(false);
    }

    let content;
    if (order.discountCode){
        content = (
            <div className="discount-code-container">
                <span className="font-weight-bold">{ order.discountCode }</span>
                <a className="font-weight-bold" href="#" onClick={clearDiscountCode}>(Clear)</a>
            </div>
        )
    }
    else{
        content = (
            <div className="input-group">
                <input type="text" className="form-control" id="discount-code-input" />
                <div className="input-group-append">
                    <Button className="btn btn-outline-secondary" label='Apply' processing={submitting}
                        style={{fontSize: '1rem', marginTop: '0'}} onClick={setDiscountCode} />
                </div>
            </div>
        )
    }

    return (
        <div>
            <label>Discount Code:</label>
            {content}
        </div>
    )
}