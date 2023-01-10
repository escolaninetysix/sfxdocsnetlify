import React from 'react'
import { CustomerContext } from '../../contexts/CustomerContext';
import { OrderContext } from '../../contexts/OrderContext'
import DiscountCodeEntry from './DiscountCodeEntry';
import LineItems from './LineItems';
import VatNumberEntry from './VatNumberEntry';

export default function OrderDetailsPanel() {
    const [order, setOrder] = React.useContext(OrderContext)
    const [customer] = React.useContext(CustomerContext);

    const showVat = () => {
        const vatCountries = 
        ['AD', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FO', 'FI', 'FR', 'DE', 'GI', 'GR', 'GL', 'GG', 'VA', 'HU', 'IS', 'IE', 'IM', 'IT', 'JE', 'LV', 'LI', 'LT', 'LU', 'MT', 'MC', 'NL', 'NO', 'PL', 'PT', 'RO', 'PM', 'SM', 'SK', 'SI', 'ES', 'SE', 'TR', 'GB'];
        return vatCountries.includes(customer.address.countryCode) && customer.gatewayName.includes('UK');
    }
    return (
        <div>
            <LineItems items={order.lineItems} />
            <div className="row">
                <div className="col-lg-6">
                    <DiscountCodeEntry />
                    {showVat() && <VatNumberEntry />}
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-5 text-right">
                            <h5>Subtotal: </h5>
                            <h5>Discount: </h5>
                            <h5>Taxes: </h5>
                        </div>
                        <div className="col-7 text-right">
                            <h5>{order.subtotal } USD</h5>
                            <h5>{order.discount } USD</h5>
                            <h5>{order.taxes } USD</h5>
                        </div>
                    </div>
                        <hr />
                    <div className="row">
                        <div className="col-5 text-right">
                            <h5>Total: </h5>
                        </div>
                        <div className="col-7 text-right">
                            <h5>{order.total } USD</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
