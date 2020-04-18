import {api, apiKey} from '../../config';

export const ALL_CURRENCY_LOADED = 'ALL_CURRENCY_LOADED';
const START_LOADING_DATA = 'START LOADING DATA';
export const ERROR_LOADING_DATA = "ERROR LOADING DATA";


export const getAllCurrency = () => {
    //повернемо функцію
    return (dispatch) => {
        dispatch({ type: START_LOADING_DATA });//можно і не писати

        fetch(`${api}/now/${apiKey}`)
            .then(res => res.json())
            .then(res => {
                dispatch({ type:ALL_CURRENCY_LOADED, payload: res })
                console.log(res , "ARRAY All Currency")
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }

}