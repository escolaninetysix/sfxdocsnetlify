import React from 'react'
import '../common.css';

export default function ErrorBanner(props) {
    const {visible, error, ...rest} = props;
    const bannerClass = visible ? 'error-banner show-banner' : 'error-banner'
    return (
        <div className={bannerClass} {...rest}>
            <div>{error}</div>
        </div>
    )
}
