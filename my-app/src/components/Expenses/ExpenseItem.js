import './ExpenseItem.css';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import {useState} from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)

    function clickHandler() {
        setTitle('Updated!')
    }

    return (<Card className={'expense-item'}>
        <div>
            <ExpenseDate date={props.date}/>
        </div>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Item</button>
    </Card>);
}

export default ExpenseItem;