import React from 'react'

const ErrorContext = React.createContext();

const ErrorProvider = props => {
    const [error, setError] = React.useState({
        variant: 'error',
        message: '',
    });
    return (
        <ErrorContext.Provider value={[error, setError]}>
            {props.children}
        </ErrorContext.Provider>
    )
}

export {ErrorProvider, ErrorContext};