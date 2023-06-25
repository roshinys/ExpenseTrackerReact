import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpensesList = (props) => {
  let expenseContent = "Found No Expenses";
  if (props.filteredExpense.length === 0) {
    return <h2 className="expenses-list__fallback">{expenseContent}</h2>;
  }
  if (props.filteredExpense.length === 1) {
    expenseContent = (
      <>
        <ExpenseItem
          key={props.filteredExpense[0].id}
          title={props.filteredExpense[0].title}
          amount={props.filteredExpense[0].amount}
          date={props.filteredExpense[0].date}
        />
        <h2 className="expenses-list__fallback">Add More Expenses ....</h2>
      </>
    );
  } else {
    expenseContent = props.filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;
