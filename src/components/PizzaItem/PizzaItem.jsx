import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';

// Displays a single Product with price on the DOM
function PizzaItem({ getPizzas, pizzaItem }) {

    const [buttonOption, setButtonOption] = useState(true);

    const dispatch = useDispatch();

// dispatch({type: 'ADD_TO_CART', payload: {name: pizzaItem.name, description: pizzaItem.description, price: pizzaItem.price, image: pizzaItem.image}})
    
    

    const toggleAddRemove = () => {


    }

    console.log(buttonOption);

    const deletePizza = () => {
        // dispatch({type: 'DELETE_FROM_COST', payload: pizzaItem.price})
        dispatch({ type: 'DELETE_FROM_CART', payload: pizzaItem })
        setButtonOption(!buttonOption)
        dispatch({type: 'SUBTRACT_TO_COST', payload: pizzaItem.price});
    }

    const addPizzaToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { id:pizzaItem.id, name: pizzaItem.name, description: pizzaItem.description, price: pizzaItem.price, image: pizzaItem.image } })
        dispatch({ type: 'ADD_TO_COST', payload: pizzaItem.price })
        console.log(pizzaItem);
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