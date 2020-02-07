import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/property/LogInPage'

import PropertyDashboardPage from '../components/property/PropertyDashboardPage';
import TenantDashboardPage from '../components/property/TenantDashboardPage';
import AddTransactionPage from '../components/property/AddTransactionPage';
import EditTransactionPage from '../components/property/EditTransactionPage';
import PhotoPage from '../components/property/PhotoPage';

import CompletedPage from '../components/CompletedPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={PropertyDashboardPage} />
        <PrivateRoute path="/create" component={AddTransactionPage} />
        <PrivateRoute path="/edit/:id" component={EditTransactionPage} />
        <PrivateRoute path="/test" component={PhotoPage} />
        <PrivateRoute path="/tenants" component={TenantDashboardPage} />


        <PrivateRoute path="/dashboardp" component={ExpenseDashboardPage} />
        <PrivateRoute path="/createp" component={AddExpensePage} />
        <PrivateRoute path="/editp/:id" component={EditExpensePage} />
        <PrivateRoute path="/completed" component={CompletedPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
