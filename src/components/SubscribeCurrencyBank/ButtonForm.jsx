import React from 'react';
import OneButton from './OneButton';
import './subscribeCurrencyBank.css';

function ButtonForm({ subscribe }) {
    return (
        <div className="button-flex">
            {subscribe.currencies.map(item => <OneButton currency={item} />)}
        </div>
    )
}
export default ButtonForm;