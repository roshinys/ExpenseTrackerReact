import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ id, date, title, amount, location }) {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{location}</h2>
        <div className="expense-item__price">Rs {amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
