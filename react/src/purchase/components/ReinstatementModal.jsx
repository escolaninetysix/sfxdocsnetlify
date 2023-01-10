import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from '../../common/components/Button';

export default function ReinstatementModal(props) {
    const {renewalVariant, reinstatementVariant, show, onConfirm, onCancel} = props;
    const [submitting, setSubmitting] = React.useState(false);
    let reinstatementFee = '0.00';
    if (reinstatementVariant && renewalVariant){
        reinstatementFee = (parseFloat(reinstatementVariant.price) - parseFloat(renewalVariant.price)).toFixed(2);
    }

    const handleCancel = event => {
        onCancel();
    }

    const handleConfirm = async event => {
        setSubmitting(true);
        await onConfirm();
        setTimeout(() => {setSubmitting(false)}, 500);
    }

    return (
        <Modal contentClassName="payment-select-modal-content" show={show} onHide={handleCancel}>
            <Modal.Header closeButton closeLabel='Close'>
                <Modal.Title>Reinstatement Required</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <span>
                        Upgrade &amp; Support has expired for this license. 
                        A reinstatement fee of ${reinstatementFee} will be applied. Continue?
                    </span>
                </div>
                <div className="d-flex flex-row justify-content-end">
                    <Button label="Add to Cart" processingLabel="Please Wait..." processing={submitting} onClick={handleConfirm} />
                    <Button className='btn ml-2' label="Cancel" onClick={handleCancel} />
                </div>
            </Modal.Body>
        </Modal>
    )
}
