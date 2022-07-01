import { combineReducers, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/authReducer';
import { balancesReducer } from '../reducers/balancesReducer';
import { selectsDataReducer } from '../reducers/selectsDataReducer';
import { debtsReducer } from '../reducers/debtsReducer';
import { movementsReducer } from '../reducers/movementsReducer';
import { typeReducer } from '../reducers/typeReducer';
import { pagesReducer } from '../reducers/pagesReducer';
import thunk from 'redux-thunk';
const reducers = combineReducers({
    auth: authReducer,
    balances: balancesReducer,
    movements: movementsReducer,
    debts: debtsReducer,
    selectsData: selectsDataReducer,
    type: typeReducer,
    pages: pagesReducer
});
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = configureStore({ reducer: reducers }, composeEnhancers(applyMiddleware(thunk)));