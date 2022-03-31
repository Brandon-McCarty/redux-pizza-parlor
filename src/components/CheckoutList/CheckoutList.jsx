import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

function CheckoutList() {

    const dispatch = useDispatch();

    const customer = useSelector(store => store.customerInformation)
    // const shoppingCart = useSelector(store => store.shoppingCart)


    const handleCheckout = () => {
        axios.post('/api/order', {
            customer_name: "Donatello",
            street_address: "20 W 34th St",
            city: "New York",
            zip: "10001",
            total: "27.98",
            type: "Pickup",
            pizzas: [{
              id: "1",
              quantity: "1"
            },{
              id: "2",
              quantity: "1"
            }]
          })
        .then(response => {
            console.log('Order Submitted')
        }).catch(err => {
            console.log(err);
        })
        dispatch({type: 'CLEAR_CUSTOMER_INFORMATION'})
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

                </tbody>
            </table>
            <h1>Total: </h1>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}

export default CheckoutList;