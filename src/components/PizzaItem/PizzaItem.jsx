import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// Displays a single Product with price on the DOM
function PizzaItem({ getPizzas, pizza }) {

    const deletePizza = () => {
        axios({
          method: 'DELETE',
          url: `/api/order/${pizza.id}`
        })
          .then((response) => { 
            getPizzas() 
          })
          .catch((error) => {
            console.log('error on delete: ', error)
          })
      };

    const dispatch = useDispatch();

    const addPizzaToCart = () => {
        console.log(pizza);
    
    dispatch({type: 'ADD_TO_CART', payload: {name: pizza.name, description: pizza.description, price: product.price, image: pizza.image}})
    dispatch({type: 'ADD_TO_COST', payload: product.price})
    }

    return (
        <li>
            {pizza.name}: {pizza.price}
            <button onClick={addPizzaToCart}>Add</button>
            <button onClick={deletePizza}>Delete</button>
        </li>
    );
}

export default PizzaItem;