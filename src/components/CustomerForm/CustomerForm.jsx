import { useState } from 'react';
import {useDispatch} from 'react-redux'


function CustomerForm({ getPizzas }) {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [orderType, setOrderType] = useState('Delivery'); // Need to grab from radio input


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, address, city, zip, orderType);

        dispatch({type: 'ADD_CUSTOMER_INFORMATION', payload: {
            customer_name: name,
            street_address: address,
            city: city,
            zip: zip,
            total: "27.98",
            type: orderType
        }})

        setName('');
        setAddress('');
        setCity('');
        setZip('');
        setOrderType('');
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <br />
                <input
                    required
                    placeholder="Street Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <br />
                <input
                    required
                    placeholder="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <br />
                <input
                    type="number"
                    required
                    placeholder="Zip"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}
                />
                <br />

                <input type="radio" 
                name ="chooseDelivery" 
                id="pickup" 
                value="Pickup" 
                />
                <label htmlFor="pickup">Pickup</label>

                <input type="radio" 
                name ="chooseDelivery" 
                id="delivery" 
                value="Delivery" 
                
                />
                <label htmlFor="pickup">Delivery</label>
                <br />
                <button type="submit">
                    Next
                </button>
            </form>
        </>
    )
}

export default CustomerForm;