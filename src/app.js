import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage'

//import './playground/promises'

const store = configureStore();

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


let downLoadPhoto = new Promise((resolve, reject)=>{
  if(true){
    console.log('In 1st promise')
    resolve(true)
  }else{
    reject('Pee')
  }
})
.then((result)=>{
  return new Promise((resolve, reject)=>{
    if(result){
      console.log('In 2nd promise')
      resolve('Hee Haw')
    }else{
      reject('Pee')
    }
  })
})
.then((result)=>console.log('Nut', result)).catch((msg)=>console.log('error', msg))

downLoadPhoto

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    console.log('uid', user.uid)
    console.log('PHOTO', user.photoURL)



    store.dispatch(login(user.uid, user.photoURL))
    store.dispatch(startSetExpenses()).then(()=>{
    renderApp()
    if (history.location.pathname === '/') {
      history.push('/dashboard')
    }
  })

  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
