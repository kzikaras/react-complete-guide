import React, { useState } from "react"; //Not necesary to import React always
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, toggleForm] = useState(false);
    // Currently adding a way to toggle the form
    const handleToggle = () => {
        let newVal = false;
        showForm === false ? newVal = true : newVal = false;
        console.log(newVal);
        toggleForm(newVal);
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    let formContent = <button onClick={ handleToggle }>Show Form</button>;
    if (showForm) {
        formContent = (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler }/>
                <button onClick={ handleToggle }></button>
            </div>
        );
    }
    return (
        { formContent }
    );
};

export default NewExpense;