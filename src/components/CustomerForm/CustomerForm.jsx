import { useState } from 'react';
import axios from 'axios';

function CustomerForm({ getPizzas }) {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    return (
        <>
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
                required
                placeholder="Zip"
                value={zip}
                onChange={(event) => setZip(event.target.value)}
            />
            <br />
            
            <input type="radio" id="pickup" value="Pickup"/>
            <label htmlFor="pickup">Pickup</label>
            
            <input type="radio" id="delivery" value="Delivery"/>
            <label htmlFor="pickup">Delivery</label>
            <button>
                Next
            </button>
        </>
    )
}

export default CustomerForm;