import React from 'react'

export default function Button(props) {
    const { processing, submit, label='Submit', processingLabel='Please Wait. . .', onClick, ...rest} = props; 
    let content = processing ? processingLabel : label;
    if (!content) content = label;

    const handleClick = async event => {
        await onClick(event);
    }

    if (submit){
        return (
            <button type="submit" disabled={processing} className="btn" {...rest}>{content}</button>
        )
    }
    else{
        return (
            <button onClick={handleClick} disabled={processing} className='btn' {...rest}>{content}</button>
        )
    }
}
