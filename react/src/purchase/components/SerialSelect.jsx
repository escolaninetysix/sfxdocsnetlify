import React from 'react'
import { PurchaseContext } from '../contexts/PurchaseContext'

export default function SerialSelect(props) {
    const {product, host, onChange} = props
    const [{serials, login}] = React.useContext(PurchaseContext);
    
    const handleChange = event => {
        onChange(event);
    }

    const validSerials = Object.values(serials).filter(serial => {
       let selectedHost = productKey.hosts[host] || host;
       const hostMatch = (selectedHost == null || selectedHost.toLowerCase() === serial.host.toLowerCase());       
       if (product == 'Continuum FCP') selectedHost = 'apple';
       
       const selectedProduct =  productKey.prods[product] || product;
       const productMatch = (selectedProduct == null || selectedProduct.toLowerCase() === serial.product.toLowerCase());
       return (hostMatch && productMatch);
    });

    const serialOptions = [];
    validSerials.forEach(serial => {
        serialOptions.push((
            <option key={serial.serial}>{serial.serial}</option>
        ))
    })

    let content;
    if (!login){
        content = (
            <div>
                <span style={{color: 'red'}}>Please <a href="/account/login">Log in</a> to see your licenses.</span>
            </div>
        )
    }

    else if (validSerials.length < 1){
        content = (
            <div>
                <span style={{color: 'red'}}>No Licenses Found for this Product.</span>
                <div><span>Not seeing your serial? <a href="/support/open-a-case">Contact us.</a></span></div>
            </div>
        )
    }

    else{
        content = (
            <div className='form-group mb-1'>
                <label>License</label>
                <select className="form-control" name="serial" onChange={handleChange}>
                    <option value="">Select a Serial Number</option>
                    {serialOptions}
                </select>
                <div><span>Not seeing your serial? <a href="/support/open-a-case">Contact us.</a></span></div>
            </div>
        )
    }

    return content;
}

const productKey = {
	hosts : {
		"Multihost (Avid/Adobe/OFX/Flame)" : "Multi-host",
		"Multihost (Adobe/Avid/OFX)" : "Multi-host",
		"Multihost (Avid/Adobe/OFX)" : "Multi-host",
		"Multihost (Flame/Adobe/Avid/OFX)" : "Multi-host",
		"Adobe and OFX" : "Adobe/OFX",
		"Multi-Host (Avid Adobe Apple OFX)" : "Multi-host + Avid",
		"Multi-Host (Adobe Apple OFX)" : "Multi-host",
		"Plug-in: MultiHost" : "Multi-host",
		"Plug-in: Adobe" : "Adobe",
		"Plug-in: Avid" : "Avid",
		"Plug-in: OFX" : "OFX",
		"Standalone + MultiHost Plug-ins" : "Standalone + Plug-Ins"
	},
	prods : {
		"Sapphire + Continuum + Mocha Pro Bundle" : "Continuum + Sapphire + Mocha",
		"Continuum + Sapphire Bundle" : "Continuum + Sapphire",
		"Continuum + Mocha Pro Bundle" : "Continuum + Mocha",
		"Sapphire + Mocha Pro Bundle" : "Sapphire + Mocha"
	}
}
