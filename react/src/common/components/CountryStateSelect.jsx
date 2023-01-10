import {countries} from "../../checkout/data/countries.js";

import React from 'react'

export default function CountryStateSelect(props) {
    const {stateSelectName = 'state', countrySelectName = 'country', hideLabels=false} = props;
    const [stateCode, setStateCode] = React.useState('');
    const [countryCode, setCountryCode] = React.useState('');

    const handleCountryChange = event => {
        setCountryCode(event.target.value);
        if (props.onCountryChange) props.onCountryChange();
    }

    const handleStateChange = event => {
        setStateCode(event.target.value);
        if (props.onStateChange) props.onStateChange();
    }

    let countryOptions = [];
    for (var i = 0; i < countries.length; i++){
        var c = countries[i];
        countryOptions.push(<option key={c.code} value={c.code}>{c.name}</option>) 
    }

    const states = getStates(countryCode);
    let stateOptions = [];
    if (states){
        for (var i = 0; i < states.length; i++){
            var s = states[i];
            stateOptions.push(<option key={s.code} value={s.code}>{s.name}</option>);
        }
    }

    return (
        <>
            <div className="form-group" style={{...props.style}}>
                {!hideLabels && <label>Country</label>}
                <select value={countryCode} name={countrySelectName} className="form-control" onChange={handleCountryChange}>
                    <option value="">--- Select Country ---</option>
                    {countryOptions}
                </select>
            </div>  
            <div className="form-group" style={{...props.style, display: states ? 'block' : 'none'}}>
                {!hideLabels && <label>State</label>}
                <select value={stateCode} name={stateSelectName} className="form-control" onChange={handleStateChange}>
                    <option value="">--- Select State ---</option>
                    {stateOptions}
                </select>
            </div>
        </>
    )
}

const getStates = countryCode => {
    if (countryCode == ''){return null;}
    for (var i = 0; i < countries.length; i++){
        if (countries[i].code == countryCode){
            return countries[i].states
        }
    }
    return null;
}