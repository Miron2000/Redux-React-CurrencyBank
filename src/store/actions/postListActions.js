import {api, apiKey} from '../../config';

export const ALL_CURRENCY_LOADED = 'ALL_CURRENCY_LOADED';
const START_LOADING_DATA = 'START LOADING DATA';
export const ERROR_LOADING_DATA = "ERROR LOADING DATA";

export const SUBSCRIBE_CURRENCY_BANK_LOADED ='SUBSCRIBE_CURRENCY_BANK_LOADED';

export const POST_CREATED = 'POST_SUBSCRIBE_CURRENCY_BANK';


export const getAllCurrency = () => {
    //повернемо функцію
    return (dispatch) => {
        dispatch({ type: START_LOADING_DATA });

        fetch(`${api}/now/${apiKey}`)
            .then(res => res.json())
            .then(res => {
                dispatch({ type:ALL_CURRENCY_LOADED, payload: res })
                console.log(res , "ARRAY All Currency")
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }

}

export const getSubscribeCurrencyBank = () => {
    
    return(dispatch) =>{
        dispatch({type:START_LOADING_DATA})

        fetch(`${api}/subscribe/${apiKey}`)
        .then(res => res.json())
        .then(res => {
            dispatch({type:SUBSCRIBE_CURRENCY_BANK_LOADED, payload: res})
            console.log(res, "OBJECT SUBSCRIBE")
        })
        .catch(err => dispatch({type: ERROR_LOADING_DATA, error: err}))
    }
}

export const createPost = (data) => {
    return (dispatch) => {
        fetch(`${api}/subscribe/attach/${apiKey}`, {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            console.log(res, 'Post')
            dispatch({type: POST_CREATED, payload: res})
        })
    }
}