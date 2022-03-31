import PizzaItem from '../PizzaItem/PizzaItem';
import { useSelector } from 'react-redux';

function PizzaList () {
    const pizzaList = useSelector( store => store.pizzaList)

    return (
        <div>
            {pizzaList.map(pizzaItem => (
                <PizzaItem 
                key={pizzaItem.id}
                pizzaItem={pizzaItem}
                />
            ))}
        </div>
    );
    
}

export default PizzaList;