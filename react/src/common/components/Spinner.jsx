import React from 'react'

export default function Spinner() {
  return (
    <>
        <style>
            {`
                .spinner-md {
                    display: inline-block;
                    position: relative;
                    width: 80px;
                    height: 80px;
                }
            
                .spinner-md div {
                    box-sizing: border-box;
                    display: block;
                    position: absolute;
                    width: 64px;
                    height: 64px;
                    margin: 8px;
                    border: 8px solid #0ab0f6;
                    border-radius: 50%;
                    animation: spinner-md 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                    border-color: #0ab0f6 transparent transparent transparent;
                }
            
                .spinner-md div:nth-child(1) {
                    animation-delay: -0.15s;
                }
            
                .spinner-md div:nth-child(2) {
                    animation-delay: -0.10s;
                }
            
                .spinner-md div:nth-child(3) {
                    animation-delay: -0.05s;
                }
            
                @keyframes spinner-md {
                    0% {
                        transform: rotate(0deg);
                    }
            
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}
        </style>
        <div className="spinner-md">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </>
  )
}
