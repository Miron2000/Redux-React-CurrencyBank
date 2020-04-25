import React from 'react';
import s from './AllCurrencyForm.module.css';


function Select(props){

     


    return(
                <>
                <select className={s.selectForm} onChange={props.handleClick}>
                {props.list && props.list.map(item => <option className={s.option} value={item}>{item}</option>)}
                </select>
                </>
            )
}
export default Select;