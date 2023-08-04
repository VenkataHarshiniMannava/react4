import React from 'react';

const ExpenseDetails = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>{props.amount} Rs</div>
    </div>
  );
};

export default ExpenseDetails;
