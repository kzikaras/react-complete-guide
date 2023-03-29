import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [enteredFilter, setEnteredFilter] = useState("2020");
  const updateFilter = (filter) => {
    console.log(filter);
    props.expenses.forEach((expense) => {
      console.log(expense.date.getFullYear());
    });
    setEnteredFilter(filter);
  };
  let filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={enteredFilter} fetchFilter={updateFilter} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
