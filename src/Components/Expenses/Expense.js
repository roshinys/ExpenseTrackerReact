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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map((expense) => {
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
