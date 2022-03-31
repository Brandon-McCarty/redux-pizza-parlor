import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Component Imports
import PizzaList from '../PizzaList/PizzaList';
import CustomerForm from '../CustomerForm/CustomerForm';

function App() {

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
  
    </div>
  );
}

export default App;
