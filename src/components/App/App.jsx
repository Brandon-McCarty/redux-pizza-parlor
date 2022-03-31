import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import {useEffect} from 'react';

function App() {

  const getPizzas = () => {

    axios.get('/api/pizza')
    .then(response => {
      console.log(response.data);
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
  
  
    </div>
  );
}

export default App;
