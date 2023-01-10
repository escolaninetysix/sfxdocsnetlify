import React from 'react'
import '../styles/subscription-select.css';

export default function SubscriptionSelect(props) {
    const {onSelect, selected, monthlyVariant, annualVariant} = props;
    const handleClick = event => {
        onSelect(event);
    }
    const monthlyClass = selected == 'Monthly Subscription' ? 'subscription-option selected' : 'subscription-option';
    const annualClass = selected == 'Annual Subscription' ? 'subscription-option selected' : 'subscription-option';

    let annualSubMonthlyCost;
    if (annualVariant){
        const annualFloat = annualVariant.price;
        const annualMonthlyFloat = annualFloat / 12;
        annualSubMonthlyCost = annualMonthlyFloat.toFixed(2);
    }


    return (
        <div className="row">
            <div className="col-xl-6 col-12 px-3 ">
                <div name="Annual Subscription" className={annualClass} onClick={handleClick}>
                    <span><strong>Best Value!</strong></span><br/>
                    <span className="title">Annual Subscription</span><br/>
                    {annualVariant && (
                        <>
                        <span className='price'>${annualSubMonthlyCost} /mo<br /></span>
                        <span className='priceSubtitle'>(billed anually at ${annualVariant.price})</span>
                        </>
                    )}
                </div>    
            </div>
            <div className="col-xl-6 col-12 px-3 mt-xl-0 mt-3">
                <div name="Monthly Subscription" className={monthlyClass} onClick={handleClick}>
                    <span>Low Monthly Cost!</span><br />
                    <span className="title">Monthly Subscription</span><br />
                    {monthlyVariant && (
                    <>
                    <span className='price'>${monthlyVariant.price} /mo<br/></span>
                    <span className='priceSubtitle'>&nbsp;</span>
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}
