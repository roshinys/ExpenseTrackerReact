import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseItem({ date, title, amount, location }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetail title={title} amount={amount} location={location} />
    </div>
  );
}

export default ExpenseItem;
