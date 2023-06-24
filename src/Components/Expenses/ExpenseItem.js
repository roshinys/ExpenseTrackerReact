import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";
import Card from "../UI/Card";

function ExpenseItem({ date, title, amount, location }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetail title={title} amount={amount} location={location} />
    </Card>
  );
}

export default ExpenseItem;
