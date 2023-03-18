import React, { useState } from "react"; //Not necesary to import React always
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, toggleForm] = useState(false);
    // Currently adding a way to toggle the form
    const handleToggle = () => {
        toggleForm();
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler }/>
            <button onClick={ handleToggle }></button>
        </div>
    );
};

export default NewExpense;