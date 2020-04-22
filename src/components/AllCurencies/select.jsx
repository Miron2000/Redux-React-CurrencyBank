import React from 'react';

// class Select extends React.Component {
// state={

// }


// render(){
//     return(
//         <>
//         <select onClick={props.searchBanksName}>
//             <option></option>
//         </select>
//         </>
//     )
// }


// }

function Select(props){

     


    return(
                <>
                <select onChange={props.handleClick}>
                {props.list && props.list.map(item => <option value={item}>{item}</option>)}
                </select>
                </>
            )
}
export default Select;