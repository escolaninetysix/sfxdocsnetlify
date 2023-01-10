import React from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { CustomerContext } from '../../checkout/contexts/CustomerContext'

import ProductDetails from './ProductDetails'
import StripeProvider from '../../checkout/components/StripeProvider'
import BillingPanel from '../../checkout/components/Billing/BillingPanel'
import VatNumberEntry from '../../checkout/components/OrderDetails/VatNumberEntry'

import '../styles/electron-checkout.css'

export default function Checkout(props) {
    const [customer, setCustomer] = React.useContext(CustomerContext);
    const [selectedVariant, setSelectedVariant] = React.useState({});
    const {sku} = props;
    React.useEffect(() => {
        const doInit = async () => {
            const variant = await fetchVariant(sku);
            setSelectedVariant(variant);

            const loginJson = Cookies.get('bfx-login');
            const login = JSON.parse(loginJson);
            const cust = await fetchCustomer(login);
            if (cust){
                setCustomer(cust);
            }
            else{
                setCustomer({...customer, email: login.email});
            }
        }
        doInit();
    }, [])

    return (
        <Container className="checkout-container">
            <Row>
                <Col md={6} lg={5}>
                    <div className='branded-box'>
                        <StripeProvider publicKey=''>
                            <BillingPanel />
                        </StripeProvider>
                    </div>
                </Col>
                <Col md={{span: 6}} lg={{offset: 1}}>
                    <Row>
                        <Col>
                            <ProductDetails variant={selectedVariant} />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={7} md={8} className="ml-3 mt-3">
                            <VatNumberEntry />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

const fetchVariant = async sku => {
    const res = await axios.get(`https://backend.borisfx.com/shopify/variant?sku=${sku}`);
    return res.data;
}

const fetchCustomer = async (login) => {
    const res = await axios.get('https://kyle-bfx.ngrok.io/stripe_customer', { auth: { username: login.email, password: login.token } });
    console.log(res);
    return res.data;
}