import { ALL_CURRENCY_LOADED, SUBSCRIBE_CURRENCY_BANK_LOADED, ERROR_LOADING_DATA } from '../actions/postListActions';

const allCurency = {
    currencies:{},
    error: null
}

const Subscribe = {
    subscribeCurBank:{},
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

export const subscribeCurrencyBank =(initialState = Subscribe, action) => {
   
    if(action.type === SUBSCRIBE_CURRENCY_BANK_LOADED){
        return {...initialState, subscribeCurBank: action.payload}
    }
    if(action.type === ERROR_LOADING_DATA){
        return{...initialState, error:action.payload}
    }
    return initialState;
}