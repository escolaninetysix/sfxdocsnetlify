import React from 'react'
import { PurchaseContext } from '../contexts/PurchaseContext'
import ProductSelect from './ProductSelect';
import SpinnerOverlay from '../../common/components/SpinnerOverlay'

import '../styles/purchase-window.css'
import ErrorBanner from '../../common/components/ErrorBanner';
import { ErrorContext } from '../../common/contexts/ErrorContext';

export default function PurchaseWindowFull() {
    const [state, setState] = React.useContext(PurchaseContext);
    const [error, setError] = React.useContext(ErrorContext);
    const [errorState, setErrorState] = React.useState({visible: false, message :''});

    React.useEffect(() => {
        const show = error.message != '';
        const errorStateNew = {visible: show, message: error.message};
        setErrorState(errorStateNew);
        if(show){
            setTimeout(() => {
                setErrorState({...errorStateNew, visible: false});
            }, 5000);
        }
    }, [error])

    return (
        <div className='row' id="purchase-window">
            <div className="col-12">
                <SpinnerOverlay hidden={!state.loading} message='Loading'>
                <div className="row" style={{minHeight: '450px'}}>
                    <div className='col-12'>
                        <ProductSelect />
                    </div>
                </div>
                </SpinnerOverlay>
            </div>
            <ErrorBanner visible={errorState.visible} error={errorState.message} />
        </div>
    )
}
