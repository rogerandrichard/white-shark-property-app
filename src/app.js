import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetTransactions } from './actions/property/transactions';
import { startSetDescriptions } from './actions/descriptions/descriptions';
import { startAddPropertyProfile } from './actions/property/properties';
import { startAddTenantProfile } from './actions/tenants/tenants';
import { login, logout } from './actions/auth';
//import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage'
//import Reduce from './playground/reducejs'
import { address_array, property_data } from '../property-data/address_objects'
import { tenant_data } from '../property-data/tenant_objects'

const store = configureStore();


// property_data.forEach((property)=>{
//   store.dispatch(startAddPropertyProfile(property))
// })

// tenant_data.forEach((tenant)=>{
//   store.dispatch(startAddTenantProfile(tenant))
// })

//
// const propertyData = {
//   address: '47 Holland Avenue',
//   city: 'Toronto',
//   province:  'Ontario',
//   country: 'Canada',
//   postcode: 'M4B 2C7'
//
// }
//
// store.dispatch(startAddPropertyProfile(propertyData))
//
// const tenantData = {
//   address: '47 Holland Avenue',
//   name: 'Peter Pan',
//   home:  '416-222-4444',
//   cell: '416-333-5555',
//   email: 'peter@pan.ca',
//   startDate: 'today',
//   endDate: undefined
// }
// store.dispatch(startAddTenantProfile(tenantData))




const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false

const renderApp = ()=>{
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true
  }
}


//ReactDOM.render(<LoadingPage />, document.getElementById('app'));
const state = store.getState()

if(state.name==='roger' || state.name==='shanti'){
      // renderApp()
      //   if (history.location.pathname === '/') {
      //     history.push('/dashboard')
      //   }
}else{
  renderApp()
}

// firebase.auth().onAuthStateChanged((user)=>{
//   if (user) {
//     store.dispatch(login(user.uid, user.photoURL))
//     store.dispatch(startSetTransactions()).then(()=>{
//     renderApp()
//       if (history.location.pathname === '/') {
//         history.push('/dashboardp')
//       }
//     })
//
//
//   } else {
//     store.dispatch(logout())
//     renderApp()
//     history.push('/')
//   }
// })
