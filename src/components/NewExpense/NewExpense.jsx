import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const [formActive, setFormActive] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      id: crypto.randomUUID(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  const formActiveHandler = () => {
    setFormActive(prevState => !prevState);
  };

  return (
    <div className="new-expense">
      {!formActive && (
        <button onClick={formActiveHandler}>Add New Expense</button>
      )}
      {formActive && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          active={formActiveHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
