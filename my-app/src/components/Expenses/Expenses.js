import './Expenses.css'
import Card from "../UI/Card";
import {useState} from "react";
import ExpenseList from './ExpenseList'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return <div>

        <Card className={'expenses'}>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>
        </Card></div>
}

export default Expenses;