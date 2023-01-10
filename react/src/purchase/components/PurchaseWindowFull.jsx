import React from 'react'
import { PurchaseContext } from '../contexts/PurchaseContext'
import BundleCarousel from './BundleCarousel';
import RecommendCarousel from './RecommendCarousel'
import CollectionSelect from './CollectionSelect';
import ProductSelect from './ProductSelect';
import SpinnerOverlay from '../../common/components/SpinnerOverlay'

import { ErrorContext } from '../../common/contexts/ErrorContext'

import '../styles/purchase-window.css'
import ErrorBanner from '../../common/components/ErrorBanner';

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

    const handleCarouselClick = event => {
        const data = event.currentTarget.dataset;
        setState({...state, collectionId: event.currentTarget.id, defaults: {...state.defaults, product: null, productIndex: data.product}});
    }

    return (
        <div className="container">
            <div className='row' id="purchase-window">
                <div className="col-md-2 col-12">
                    <CollectionSelect />
                </div>
                <div className="col-md-10 col-12">
                    <SpinnerOverlay hidden={!state.loading} message='Loading'>
                    <div className="row" style={{minHeight: '450px'}}>
                        <div className='col-7'>
                            <div dangerouslySetInnerHTML={state.productHtml} />
                        </div>
                        <div className='col-5'>
                            <ProductSelect/>
                        </div>
                    </div>
                    </SpinnerOverlay>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <BundleCarousel onClick={handleCarouselClick} />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <RecommendCarousel onClick={handleCarouselClick} />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <ErrorBanner visible={errorState.visible} error={errorState.message} />
        </div>
    )
}
