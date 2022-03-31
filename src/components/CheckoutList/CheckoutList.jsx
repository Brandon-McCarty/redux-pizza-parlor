import {useSelector, useDispatch} from 'react-redux';

function CheckoutList() {

    const dispatch = useDispatch();

    const customer = useSelector(store => store.customerInformation)
    // const shoppingCart = useSelector(store => store.shoppingCart)


    const handleCheckout = () => {
        dispatch({type: 'CLEAR_CUSTOMER_INFORMATION'})
    }

    return (
        <>
            <h1>Step 3: Checkout</h1>
            <div>
                <p>{customer.customer_name} </p>
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

            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}

export default CheckoutList;