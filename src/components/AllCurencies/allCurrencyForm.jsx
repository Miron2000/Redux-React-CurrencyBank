import React from 'react';
import LanguageContext from '../../LanguageContext/LanguageContext';
import s from '../AllCurencies/AllCurrencyForm.module.css';



function AllCurrencyForm({ currency }) {

    const translations = {
        bankText: {
            en: currency.bank_name_en,
            ru: currency.bank_name_ru
        },
        currencyText: {
            en: currency.currency_name_en,
            ru: currency.currency_name_ru
        }
    }


    // console.log(Object.keys(currencyUSD), 'keys')
    return (

        <>
       
            <tr>
                <LanguageContext.Consumer>
                    {(value) => <td>{translations.bankText[value]}</td>}
                </LanguageContext.Consumer>
                <LanguageContext.Consumer>
                    {(value) => <td>{translations.currencyText[value]}</td>}
                </LanguageContext.Consumer>
                <td>{currency.buy}</td>
                <td>{currency.sell}</td>

            </tr>


        </>

    )
}
export default AllCurrencyForm;