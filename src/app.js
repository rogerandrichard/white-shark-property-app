
import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

//store.require("history").createBrowserHistory()

store.subscribe(()=>{
  const state = store.getState()
})

const Test = ()=>(
  <div>
    <h1>Test</h1>
  </div>
)

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))
