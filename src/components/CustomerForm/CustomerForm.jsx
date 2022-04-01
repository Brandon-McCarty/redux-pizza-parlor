import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'


function CustomerForm({ getPizzas }) {

    const history = useHistory();

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [orderType, setOrderType] = useState(''); // Need to grab from radio input

    const handleChange = (event) => {
        const target = event.target;
        if (target.checked) {
          setOrderType(target.value);
        }
     };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, address, city, zip, orderType);
        history.push('/checkoutList');

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
                checked={orderType == 'Pickup'} 
                onChange={handleChange}
                />
                <label htmlFor="pickup">Pickup</label>

                <input type="radio" 
                name ="chooseDelivery" 
                id="delivery" 
                value="Delivery" 
                checked={orderType == 'Delivery'} 
                onChange={handleChange}
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