import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import expensesReducer from '../reducers/expenses';
import transactionsReducer from '../reducers/property/transactions';
import propertiesReducer from '../reducers/property/properties';
import tenantsReducer from '../reducers/tenants/tenants';
import descriptionsReducer from '../reducers/descriptions/descriptions';
import filtersReducer from '../reducers/property/filters';
import tenantsFiltersReducer from '../reducers/tenants/filters';
import jobsReducer from '../reducers/jobs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      transactions: transactionsReducer,
      properties: propertiesReducer,
      tenants: tenantsReducer,
      descriptions: descriptionsReducer,
      filters: filtersReducer,
      tenantsFilters: tenantsFiltersReducer,
      auth: authReducer,
      jobs: jobsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
