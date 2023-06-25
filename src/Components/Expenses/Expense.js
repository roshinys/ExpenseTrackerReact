import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Mysore",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "mumbai",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294,
      date: new Date(2021, 2, 28),
      location: "Bengaluru",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Chennai",
    },
  ];

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expense;
