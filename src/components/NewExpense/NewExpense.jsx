import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      id: crypto.randomUUID(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
