import React from "react";

function ExpenseItem() {
  const expenseItems = [
    { name: "food", price: 10 },
    { name: "petrol", price: 10 },
    { name: "other", price: 20 },
  ];
  return (
    <div>
      <ul>
        {expenseItems.map((expense) => {
          return (
            <li>
              {expense.name} Rs{expense.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExpenseItem;
