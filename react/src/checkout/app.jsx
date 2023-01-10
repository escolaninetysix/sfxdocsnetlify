import React from 'react'
import Checkout from './components/Checkout';
import { CustomerProvider } from './contexts/CustomerContext'
import { ErrorProvider } from './contexts/ErrorContext';
import { OrderProvider } from './contexts/OrderContext';

export default function App() {


    return (
        <div className='h-100' style={{minHeight: '600px'}}>
            <OrderProvider>
                <CustomerProvider>
                    <ErrorProvider>
                        <Checkout />
                    </ErrorProvider>
                </CustomerProvider>
            </OrderProvider>
        </div>
    )
}
    