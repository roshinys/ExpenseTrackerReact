import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const addExpenseHandler = (expenseData) => {
    console.log("in App.js");
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense></Expense>
    </div>
  );
}

export default App;
