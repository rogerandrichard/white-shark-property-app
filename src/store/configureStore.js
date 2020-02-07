import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import expensesReducer from '../reducers/expenses';
import transactionsReducer from '../reducers/property/transactions';
import propertiesReducer from '../reducers/property/properties';
import tenantsReducer from '../reducers/property/tenants';
import filtersReducer from '../reducers/property/filters';
import jobsReducer from '../reducers/jobs';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      transactions: transactionsReducer,
      properties: propertiesReducer,
      tenants: tenantsReducer,
      filters: filtersReducer,
      auth: authReducer,
      jobs: jobsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
