import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//REDUX Imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// REDUCERS
const pizzaList = (state = [], action) => {
    if (action.type === 'SET_PIZZA_LIST') {
        return action.payload
    }
    return state;
};

const customerInformation = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER_INFORMATION':
            return action.payload
        default:
            return state
    }
};

const shoppingCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'DELETE_FROM_CART':
            console.log(action.payload.id);
            
            return state.filter((pizzaItem) => pizzaItem.id !== action.payload.id)
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

const reduxStore = createStore(
    combineReducers({
        pizzaList,
        customerInformation,
        shoppingCart
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
