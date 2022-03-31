import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// REDUX Imports
import PizzaList from '../PizzaList/PizzaList';

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

  useEffect(() => {
    console.log('in useEffect');
    getPizzas();
  }, []);

  return (
    <div className='App'>
      <Header />
      <PizzaList />
  
    </div>
  );
}

export default App;
