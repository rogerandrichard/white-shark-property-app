
import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up remove expense action object', ()=>{
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should set up edit expense action object', ()=>{
  const action = editExpense('123abc', {note: 'New Edit Note'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'New Edit Note'}
  })
})

test('should set up add expense action object with provided values', ()=>{
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'Last month rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should set up add expense action object with no provided values', ()=>{
  const action = addExpense({})
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  })
})
