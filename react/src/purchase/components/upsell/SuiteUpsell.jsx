import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from '../../../common/components/Button'

export default function SuiteUpsell(props) {
    const {isMonthly, currentVariant, suiteVariant, onConfirm, onCancel} = props;
    const [submitting, setSubmitting] = React.useState('');
    
    const isSale = suiteVariant.price != suiteVariant.compareAt;

    const interval = isMonthly ? 'month' : 'year';
    let suiteValue = ''

    if (isSale){
        suiteValue += `$${suiteVariant.price} for your first ${interval}, then $${suiteVariant.compareAt} per ${interval}.`
    }
    else{
        suiteValue = `$${suiteVariant.price} per ${interval}.`
    }

    const handleConfirm = async () => {
        setSubmitting('confirm');
        await onConfirm();
        setSubmitting('');
    }
    const handleCancel = async () => {
        setSubmitting('cancel');
        await onCancel();
        setSubmitting('');
    }

    return (
        <div>
            <Modal.Header closeButton={!submitting} closeLabel='Close' onHide={handleCancel}>
                <Modal.Title>Recommended Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row m-0">
                    <div className="col">
                        <p></p>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-12" style={{ borderRight: 'solid 1px #dddddd' }}>
                        <div className="row m-0 justify-content-center">
                            <div className="col-3 p-0">
                                <img className="img-fluid" src='https://cdn.shopify.com/s/files/1/1222/4522/products/BorisFXSuite_Box_large.png?v=1611261601' />
                            </div>
                            <div className="col-9 p-0" style={{ fontSize: '.8rem' }}>
                                <div className="row m-0">
                                    <h5>Save over 50% on all products when you switch to the Boris FX Suite</h5>
                                    <p style={{fontSize: '1rem'}}>Includes Sapphire, Continuum, Mocha Pro, Silhouette and Optics</p>
                                    <p style={{fontSize: '.9rem'}}>{suiteValue}</p>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="d-inline-block">
                                            <Button className="btn confirm-btn" processing={submitting == 'confirm'} 
                                                disabled={submitting != ''} label='Upgrade to Suite' onClick={handleConfirm} 
                                                processingLabel='Please Wait. . .' />
                                        </div>
                                        <div className="d-inline-block pl-3">
                                            <Button label='No Thanks' className="btn cancel-btn" 
                                                processing={submitting == 'cancel'} disabled={submitting != ''} onClick={handleCancel} 
                                                processingLabel='Please Wait. . .' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </div>
    )
}
