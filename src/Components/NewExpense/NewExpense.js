import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditHandler = () => {
    setIsEditing(true);
  };

  const stopEditHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditHandler}> Add New Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onsaveExpenseDate={saveExpenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
