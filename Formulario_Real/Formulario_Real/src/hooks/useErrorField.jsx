import React from 'react';
import useField from './useField';

export function ErrorField({ messages }) {

    return (
        <div className='error-message'>{
            messages
            }</div>
    )

}

export default ErrorField