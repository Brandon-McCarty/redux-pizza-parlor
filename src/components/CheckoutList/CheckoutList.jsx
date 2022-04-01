import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import CheckoutItem from '../CheckoutItem/CheckoutItem';

function CheckoutList() {

    const history = useHistory();
    const dispatch = useDispatch();

    const customer = useSelector(store => store.customerInformation)
    const shoppingCart = useSelector(store => store.shoppingCart)
    const totalCost = useSelector(store => store.sumOrder)

    const pizzaOrder = () => {
        let pizzaList = [];
        for (let pizza of shoppingCart) {
            pizzaList.push({id: pizza.id, quantity: 1})
        }
        return pizzaList;
    }

    let pizzas = pizzaOrder(shoppingCart)
    console.log(pizzas);

    const handleCheckout = () => {
        console.log('TEST', shoppingCart);
        axios.post('/api/order', {
            customer_name: customer.customer_name,
            street_address: customer.street_address,
            city: customer.city,
            zip: customer.zip,
            total: totalCost,
            type: customer.type,
            pizzas: pizzas
        })
            .then(response => {
                console.log('Order Submitted')
            }).catch(err => {
                console.log(err);
            })
        dispatch({ type: 'CLEAR_CUSTOMER_INFORMATION' })
        dispatch({ type: 'CLEAR_CART' })
        history.push('/');
        dispatch({ type: 'CLEAR_COST' })
    }

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <div>
                <p>{customer.customer_name} </p><p>{customer.type}</p>
                <p>{customer.street_address}</p>
                <p>{customer.city}, MN</p>

            </div>



            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingCart.map((product) => {
                        return (<CheckoutItem key={product.id} product={product} />);
                    })}
                </tbody>
            </table>
            <h1>Total: </h1>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}

export default CheckoutList;