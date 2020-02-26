import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/property/LogInPage'

import PropertyDashboardPage from '../components/property/PropertyDashboardPage';
import TenantDashboardPage from '../components/tenants/TenantDashboardPage';
import AddTransactionPage from '../components/property/AddTransactionPage';
import EditTransactionPage from '../components/property/EditTransactionPage';
import AddDescTypePage from '../components/descriptions/AddDescTypePage';
import PhotoPage from '../components/property/PhotoPage';
import AddTenantPage from '../components/tenants/AddTenantPage';
import EditTenantPage from '../components/tenants/EditTenantPage';

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={PropertyDashboardPage} />
        <PrivateRoute path="/desc_type" component={AddDescTypePage} />
        <PrivateRoute path="/create" component={AddTransactionPage} />
        <PrivateRoute path="/edit/:id" component={EditTransactionPage} />
        <PrivateRoute path="/edit_tenant/:id" component={EditTenantPage} />
        <PrivateRoute path="/test" component={PhotoPage} />
        <PrivateRoute path="/tenants" component={TenantDashboardPage} />
        <PrivateRoute path="/addtenant" component={AddTenantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
