import React from 'react';
import ExpenseList from './ExpenseList';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Food', amount: 10, date: new Date(2023, 7, 1) },
    { id: 'e2', title: 'Petrol', amount: 100, date: new Date(2023, 7, 2) },
    { id: 'e3', title: 'Movies', amount: 200, date: new Date(2023, 7, 3) },
    // Add more expenses as needed
  ];

  return (
    <div>
      <h1>My Expenses</h1>
      {expenses.map((expense) => (
        <ExpenseList
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default App;
