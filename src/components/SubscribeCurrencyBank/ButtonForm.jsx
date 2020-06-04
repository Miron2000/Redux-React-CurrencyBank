import React from 'react';
import OneButton from './OneButton';
import './subscribeCurrencyBank.css';

function ButtonForm({ subscribe, language }) {
    return (
        <div className="button-flex">
            {subscribe.currencies.map(item => <OneButton currency={item} language={language}/>)}
        </div>
    )
}
export default ButtonForm;