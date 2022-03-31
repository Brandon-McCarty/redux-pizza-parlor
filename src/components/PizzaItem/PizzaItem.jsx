import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {useState} from 'react';

// Displays a single Product with price on the DOM
function PizzaItem({ getPizzas, pizzaItem }) {

    const [buttonOption, setButtonOption] = useState(true);

    const dispatch = useDispatch();

// dispatch({type: 'ADD_TO_CART', payload: {name: pizzaItem.name, description: pizzaItem.description, price: pizzaItem.price, image: pizzaItem.image}})
    
    

    const toggleAddRemove = () => {

      
    }

    console.log(buttonOption);

    const deletePizza = () => {
        dispatch({type: 'SUBTRACT_TO_COST', payload: pizzaItem.price});
        setButtonOption(!buttonOption);
    }

    const addPizzaToCart = () => {
        console.log(pizzaItem);
        dispatch({type: 'ADD_TO_COST', payload: pizzaItem.price});
        setButtonOption(!buttonOption);
    }

    return (
        <>
        <li>
            {pizzaItem.name}: {pizzaItem.price}
            {buttonOption ? <button onClick={addPizzaToCart}>Add</button> : <button onClick={deletePizza}>Delete</button>}
        </li>
        </>
    );
}


export default PizzaItem;