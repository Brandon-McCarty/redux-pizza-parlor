import PizzaItem from '../PizzaItem/PizzaItem';
import { useSelector } from 'react-redux';

function PizzaList ({sumTotal}) {
    const pizzaList = useSelector( store => store.pizzaList)

    return (
        <div className="grid-container">
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
