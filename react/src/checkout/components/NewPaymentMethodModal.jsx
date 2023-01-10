import React from 'react'
import { usePlaidLink, PlaidLinkOnSuccess } from 'react-plaid-link';
import axios from 'axios'

import Modal from 'react-bootstrap/Modal';
import Button from '../../common/components/Button';
import NewAchForm from '../../common/components/NewAchForm';
import NewCardForm from '../../common/components/NewCardForm';
import { CustomerContext } from '../contexts/CustomerContext';
import Cookies from 'js-cookie';
import { ErrorContext } from '../../common/contexts/ErrorContext';

export default function NewPaymentMethodModal(props) {
    const {show, onHide, ...rest} = props; 
    const [customer, setCustomer] = React.useContext(CustomerContext);
    const [error, errorContext] = React.useContext(ErrorContext);
    const [methodType, setMethodType] = React.useState('');
    const [plaidLinkToken, setPlaidLinkToken] = React.useState();
    const [plaidData, setPlaidData] = React.useState({});
    const [plaidPublicToken, setPlaidPublicToken] = React.useState();

    const handleCardClick = event => {
        setMethodType(event.target.name);
    }
    const handleClose = () => {
        onHide();
        setTimeout(resetModal, 200);
    }
    const handleSuccess = async () => {
        try{
            const loginJson = Cookies.get('bfx-login');
            const login = JSON.parse(loginJson);
            const customer = await fetchCustomer(login);
            setCustomer(customer);
        }
        catch(err){
            setError({variant: 'error', message: 'Failed to Reload Customer Data\nTry reloading the page to see your new payment method.'})
        }
        handleClose();
    }

    const handleError = async err => {
        console.error(err);
        handleClose();
        setError({variant: 'error', message: 'Failed to Save Payment Method\nPlease Review your Information and try again.'})
    }

    const resetModal = () => {
        setMethodType('');
        setPlaidData({});
        setPlaidPublicToken({});
    }

    //Initialize Plaid
    React.useEffect(() => {
        const getToken = async () => {
            try{
                const res = await axios.post('https://backend.borisfx.com/plaid/token');
                setPlaidLinkToken(res.data);
            }
            catch(err){
                console.error(err);
            }
        }
        getToken();
    }, [])
 
    const { open, ready } = usePlaidLink({
        token: plaidLinkToken,
        env: 'sandbox',
        onSuccess: (public_token, metadata) => {
            setPlaidData(metadata);
            setPlaidPublicToken(public_token);
            setMethodType('ach');
        },
    });

    let content;
    if (methodType == ''){
        content = (
            <div className="h-100 d-flex flex-column justify-content-center align-items-center" style={{minHeight:'300px'}}>
                <h3 className='text-center'>Select your Payment Method Type:</h3>
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <div><Button name="card" style={{fontSize: '1.5rem', fontWeight: '600', width: '250px'}} onClick={handleCardClick} label="Credit Card" /></div>
                    <div><Button name="ach" style={{fontSize: '1.5rem', fontWeight: '600', width: '250px'}} onClick={() => open()} label="Bank Account" /></div>
                </div>    
            </div>
        )
    }
    
    else if (methodType == 'card'){
        content = <NewCardForm onSuccess={handleSuccess} onError={handleError} />
    }

    else if (methodType == 'ach'){
        content = <NewAchForm data={plaidData} publicToken={plaidPublicToken} onSuccess={handleSuccess} onError={handleError} />
    }

    else{
        content = <div></div>
    }

    //render
    return (
        <>
        <style>
            {`
                .payment-select-modal-content{
                    min-height: 300px;
                }
            `}
        </style>
        <Modal contentClassName="payment-select-modal-content" show={show} onHide={handleClose}>
            <Modal.Header closeButton closeLabel='Close'>
            <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
        </Modal>
        </>
    )
}

const fetchCustomer = async (login) => {
    const res = await axios.get('https://backend.borisfx.com/stripe_customer', { auth: { username: login.email, password: login.token } });
    return res.data;
}