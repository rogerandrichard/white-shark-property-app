import React from 'react';
import { Link } from 'react-router-dom';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary'
import SummTest from './SummTest'


const ExpenseDashboardPage = () => (
  <div>
    <Link className='list-item' to={`/completed`}>Completed</Link>

    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
