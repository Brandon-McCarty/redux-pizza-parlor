import PizzaItem from '../PizzaItem/PizzaItem';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'

function PizzaList ({sumTotal}) {
    const pizzaList = useSelector( store => store.pizzaList)

    const history = useHistory();

    const handleClick = () => {
        history.push('/customerForm');
    };

    return (
        <div className="grid-container">
            {pizzaList.map(pizzaItem => (
                <PizzaItem 
                key={pizzaItem.id}
                pizzaItem={pizzaItem}
                />
            ))}
            <button onClick={handleClick}>NEXT</button>
        </div>
    );
    
}

export default PizzaList;
