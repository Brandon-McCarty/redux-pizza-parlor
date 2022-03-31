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

const reduxStore = createStore(
    combineReducers({
      pizzaList
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(
    <Provider store={reduxStore}>
            <App />, 
    </Provider>,
    document.getElementById('root')
);
