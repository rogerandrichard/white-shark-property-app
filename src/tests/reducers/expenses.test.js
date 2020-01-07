import expensesReducer from '../../reducers/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('should set default state', ()=>{
  const expensesReducerDefaultState = []
  const action = { type: '@@INIT' }
  const state = expensesReducer(undefined, action)
  expect(state).toEqual(expensesReducerDefaultState)
})

test('should add new expense', ()=>{
  const expense = {
    id: '99',
    description: 'Puck',
    note: '',
    amount: 500,
    createdAt: 0
  }
  const action = { type: 'ADD_EXPENSE', expense: expense }
  const state = expensesReducer(expenses, action)
  //expect(state).toEqual(expenses.concat(expense))
  expect(state).toEqual([...expenses, expense])
})

test('should remove expense by id', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should edit expense with valid id', ()=>{
  const amount = 50000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount)
})

test('should not edit expense with invalid id', ()=>{
  const amount = 50000
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
