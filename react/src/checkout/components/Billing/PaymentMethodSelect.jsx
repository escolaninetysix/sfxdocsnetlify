import axios from 'axios';
import React from 'react';
import {CustomerContext} from '../../contexts/CustomerContext'
import NewPaymentMethodModal from '../NewPaymentMethodModal';
import Button from '../../../common/components/Button';

export default function PaymentMethodSelect(props) {
    const [customer, setCustomer] = React.useContext(CustomerContext);
    const [showModal, setShowModal] = React.useState(false);
    const [selectedCardId, setSelectedCardId] = React.useState('');
    React.useEffect(() => {
        const getUser = async () => {
            const customer = await fetchCustomer();
            setCustomer(customer);
        }
        if (!customer.customerId) getUser();
    }, [])

    const handleSubmit = () => {
        props.onSave(selectedCardId);
    }

    const handleCardChange = event => {
        setSelectedCardId(event.target.value);
    }

    const handleModalOpen = () => {
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    let body;

    if (customer.cards.length > 0) {
        let cardInputs = [];
        for (var i = 0; i < customer.cards.length; i++) {
            const card = customer.cards[i];
            cardInputs.push((
                <div className='form-check ml-4' key={card.pmId}>
                    <input className='form-check-input' type="radio" name='cardId' 
                    id={'card' + i} value={card.stripeId} onChange={handleCardChange} />
                    <label className='form-check-label' htmlFor={'card' + i}>
                        {card.type == 'card' ? card.brand : 'Bank Account'} Ending in {card.lastFour}
                    </label>
                </div>
            ))
        }
        body = (
            <div style={{flexGrow: '1'}}>
                {cardInputs}
            </div>
        )
    }

    else{
        body = (
            <div style={{flexGrow: '1'}}>
                <h5>No Payment Methods Saved</h5>
                <p>Please select "New Payment Method" to enter your payment details.</p>
            </div>
        )
    }

    return (
        <div className='d-flex h-100 flex-column'>
            <h3>Select a Payment Method</h3>

            {body}

            <div className="d-flex w-100 justify-content-end align-self-end">
                <div><Button label="New Payment Method" onClick={handleModalOpen} /></div>
                <div className='pl-2'><Button label="Submit Order" processingLabel="Please Wait.." onClick={handleSubmit} /></div>
            </div>
            <NewPaymentMethodModal show={showModal} onHide={handleModalClose} />
        </div>
    )
}

const fetchCustomer = async () => {
    const loginJson = Cookies.get('bfx-login');
    const login = JSON.parse(loginJson);

    const res = await axios.get('https://backend.borisfx.com/stripe_customer', { auth: { username: login.email, password: login.token } });
    return res.data;
}
