import PizzaItem from "../PizzaItem/PizzaItem";
import { useSelector } from "react-redux";

function Header({pizzaItem}) {

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const sumOrder = useSelector( store => store.sumOrder)

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
                <h3>Total: {dollarUS.format(sumOrder.toFixed(2))}</h3>
            </header>
        </>
    )
}

export default Header;