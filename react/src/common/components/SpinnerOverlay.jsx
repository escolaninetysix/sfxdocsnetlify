import React from 'react'
import Spinner from './Spinner'

export default function SpinnerOverlay(props) {
  const {hidden=false, message, children} = props;
  
  const overlayClass = hidden ? 'hidden' : 'spinner-overlay';

  return (
    <>
    <style>
        {`
            .spinner-container{
                position:relative;
                width:100%;
                overflow: hidden;
            }

            .spinner-overlay {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(255, 255, 255, 0.9);
                z-index: 900;
                overflow:hidden;
            }

            .hidden{
                display:none;
            }
        `}
    </style>
    <div className="spinner-container">
        <div className={overlayClass}>
            <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
                <div><Spinner /></div>
                <div>
                    <p style={{color: '#26A9E0', fontWeight: 700}}>
                        {message}
                    </p>
                </div>
            </div>
        </div>
        {children}
    </div>
    </>
  )
}
