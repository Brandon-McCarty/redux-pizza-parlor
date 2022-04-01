import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// Component Imports
import PizzaList from '../PizzaList/PizzaList';
import CustomerForm from '../CustomerForm/CustomerForm';
import CheckoutList from '../CheckoutList/CheckoutList';

function App() {

  const runningTotal = useSelector( store => store.sumOrder )

  const dispatch = useDispatch();

  const getPizzas = () => {
    axios.get('/api/pizza')
    .then(response => {
      console.log(response.data);
      dispatch({ type: 'SET_PIZZA_LIST', payload: response.data})
    }).catch(err => {
      console.log('Error in getting pizzas', err);
    })
  }

  const sumOrder = () => {
    dispatch({ type: 'ADD_ITEM_SUM'})
  }

  useEffect(() => {
    console.log('in useEffect');
    getPizzas();
  }, []);

  return (
    <Router>
    <div className='App'>
      <Route path="/">
      <Header />
      <Route path="/" exact>
      <PizzaList 
        sumOrder={sumOrder}   
      />
      </Route>
      </Route>
      <Route path="/customerForm">
      <CustomerForm />
      </Route>
      <Route path="/checkoutList">
      <CheckoutList />
      </Route>
    </div>
    </Router>
  );
}

export default App;
