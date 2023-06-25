import { useState } from "react";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const [expense, setExpense] = useState({});

  const addExpenseHandler = (expenseData) => {
    setExpense(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expense={expense}></Expense>
    </div>
  );
}

export default App;
