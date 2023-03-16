import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [enteredFilter, setEnteredFilter] = useState('2020');
    const updateFilter = (filter) => {
        console.log(filter);
        props.expenses.forEach(expense => {
            console.log(expense.date.getFullYear());
        });
        setEnteredFilter(filter);
    }
    let filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === enteredFilter;
    });
    let expensesContent = <p>No Expenses Found.</p>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />
        ))
    }
    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter 
                selected={ enteredFilter } 
                fetchFilter= { updateFilter }
            />
            { expensesContent }
            </Card>
        </div>
    );
}

export default Expenses;