import React, { Children } from 'react'

const CustomerContext = React.createContext();

const CustomerProvider = props => {
    const [customer, setCustomer] = React.useState({
        customerId: '',
        stripeId: '',
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        address: '',
        gatewayId: '',
        gatewayKey: '',
        gatewayName: '',
        isTestGateway: false,
        accountId: '',
        vatNumber: '',
        cards: []
    });
    return (
        <CustomerContext.Provider value={[customer, setCustomer]}>
            {props.children}
        </CustomerContext.Provider>
    )
}

export {CustomerProvider, CustomerContext};