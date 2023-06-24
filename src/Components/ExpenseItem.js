import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <>
      {expenses.map((expense) => {
        return (
          <div className="expense-item" key={expense.id}>
            <div>{expense.date.toISOString()}</div>
            <div className="expense-item__description">
              <h2>{expense.title}</h2>
              <div className="expense-item__price">Rs {expense.amount}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ExpenseItem;
