import {combineReducers, createStore, applyMiddleware} from "redux";
import {allCurrency, subscribeCurrencyBank} from './reducers/postListReducer';
import thunk from 'redux-thunk';
import {compose} from 'redux';

const reducers = combineReducers({allCurrency:allCurrency, subscribeCurrencyBank:subscribeCurrencyBank});


const enchancedMiddleware = compose(applyMiddleware(thunk));

export const store = createStore(reducers, enchancedMiddleware)