import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filteredYearHandler = year => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectYear={filteredYearHandler}
          selected={selectedYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
