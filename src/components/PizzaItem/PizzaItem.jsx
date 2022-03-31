import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// Displays a single Product with price on the DOM
function PizzaItem({ getPizzas, pizzaItem }) {

    const deletePizza = () => {


    const dispatch = useDispatch();

    const addPizzaToCart = () => {
        console.log(pizzaItem);
    
    // dispatch({type: 'ADD_TO_CART', payload: {name: pizzaItem.name, description: pizzaItem.description, price: pizzaItem.price, image: pizzaItem.image}})
    // dispatch({type: 'ADD_TO_COST', payload: product.price})
    }

    return (
        <li>
            {pizzaItem.name}: {pizzaItem.price}
            <button onClick={addPizzaToCart}>Add</button>
            <button onClick={deletePizza}>Delete</button>
        </li>
    );
}

export default PizzaItem;