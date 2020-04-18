import { ALL_CURRENCY_LOADED, ERROR_LOADING_DATA } from '../actions/postListActions';

const allCurency = {
    currencies:[],
    error: null
}

export const allCurrency = (initialState = allCurency, action) => {
    if (action.type ===  ALL_CURRENCY_LOADED) {
        return { ...initialState, currencies: action.payload }
    }
    if(action.type === ERROR_LOADING_DATA){
        return{...initialState, error:action.payload}
    }
    return initialState;
}