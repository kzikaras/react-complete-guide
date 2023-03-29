import React, { useState } from "react"; //Not necesary to import React always
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, toggleForm] = useState(false);
    // Currently adding a way to toggle the form
    const handleToggleOpen = () => {
        toggleForm(true);
    }
    const handleToggleClose = () => {
        toggleForm(false);
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        toggleForm(false);
    };
    let formContent = (
        <div className="new-expense">
            <button onClick={ handleToggleOpen }>Add New Expense</button>
        </div>
    );
    if (showForm) {
        formContent = (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } onCancel={ handleToggleClose }/>
            </div>
        );
    }
    return (
        <div>
            { formContent }
        </div>
    );
};

export default NewExpense;