import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ date, title, amount, location }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{location}</h2>
        <div className="expense-item__price">Rs {amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
