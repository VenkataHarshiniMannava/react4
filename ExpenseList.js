import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDate';

const ExpenseList = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteExpenseHandler = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null; // Don't render the component if deleted
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </div>
  );
};

export default ExpenseList;
