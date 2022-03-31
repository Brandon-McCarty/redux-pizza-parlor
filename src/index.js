import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//REDUX Imports
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// REDUCERS
const pizzaList = ( state = [], action ) => {
    if( action.type === 'SET_PIZZA_LIST'){
        return action.payload
    }
    return state;
}

const sumOrder = ( state = 0, action ) => {
    switch (action.type) {
        case 'ADD_TO_COST':
            return Number(state) + Number(action.payload);
        case 'SUBTRACT_TO_COST':
            return Number(state) - Number(action.payload);
        case 'CLEAR_COST':
            return 0;
        default:
            return state;
    }
}

const customerInformation = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_CUSTOMER_INFORMATION':
            return action.payload
        default:
            return state
    }

}

const reduxStore = createStore(
    combineReducers({
      pizzaList,
      sumOrder,
      customerInformation,
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(
    <Provider store={reduxStore}>
            <App /> 
    </Provider>,
    document.getElementById('root')
);
