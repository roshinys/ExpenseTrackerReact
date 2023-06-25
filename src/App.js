import { useState } from "react";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses}></Expense>
    </div>
  );
}

export default App;
