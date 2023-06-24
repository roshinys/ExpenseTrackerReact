import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";

function ExpenseItem({ id, date, title, amount, location }) {
  const clickHandler = () => {
    console.log("clicked");
  };

  const deleteExpenseHandler = (e) => {
    const expenseId = e.target.id;
    const expenseItem = document.getElementById(expenseId).parentElement;
    const parentExpense = expenseItem.parentElement;
    parentExpense.removeChild(expenseItem);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetail title={title} amount={amount} location={location} />
      <button onClick={clickHandler}>Change Title</button>
      <button id={id} onClick={deleteExpenseHandler}>
        Delete Expense
      </button>
    </Card>
  );
}

export default ExpenseItem;
