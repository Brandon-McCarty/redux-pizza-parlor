import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
    <div className='App'>
      <Header />
        <PizzaList 
          sumOrder={sumOrder}
        />
      <CustomerForm />
      <CheckoutList />
    </div>
  );
}

export default App;
