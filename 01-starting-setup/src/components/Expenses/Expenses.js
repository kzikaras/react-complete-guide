import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [enteredFilter, setEnteredFilter] = useState('2020');
    const updateFilter = (filter) => {
        console.log(filter);
        setEnteredFilter(filter);
    }
    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter selected={ enteredFilter } fetchFilter= { updateFilter }/>
            { props.expenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)) }
            </Card>
        </div>
    );
}

export default Expenses;