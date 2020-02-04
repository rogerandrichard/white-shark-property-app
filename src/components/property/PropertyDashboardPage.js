import React from 'react';
import { Link } from 'react-router-dom';

import TransactionList from './TransactionList';
import TransactionListFilters from './TransactionListFilters';
import TransactionSummary from './TransactionSummary'


const PropertyDashboardPage = () => (
  <div>
    <TransactionSummary />
    <TransactionListFilters />
    <TransactionList />
  </div>
);

export default PropertyDashboardPage;
