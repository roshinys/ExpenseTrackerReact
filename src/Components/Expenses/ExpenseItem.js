import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated Title");
    console.log("clicked");
  };

  const amountHandler = () => {
    setAmount((amount) => {
      return parseFloat(amount) + 100;
    });
  };

  const deleteExpenseHandler = (e) => {
    const expenseId = e.target.id;
    const expenseItem = document.getElementById(expenseId).parentElement;
    const parentExpense = expenseItem.parentElement;
    parentExpense.removeChild(expenseItem);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail title={title} amount={amount} location={props.location} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountHandler}>Add 100rs</button>
      <button id={props.id} onClick={deleteExpenseHandler}>
        Delete Expense
      </button>
    </Card>
  );
}

export default ExpenseItem;
