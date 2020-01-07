import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', ()=>{
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', ()=>{
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'} )
  expect(state.sortBy).toEqual('amount')
})

test('should set sortBy to date', ()=>{
  const currentState = {
    text: '',
    sortBy: undefined,
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set text filter to xxxxx', ()=>{
  const text = 'xxxxx'
  const action = { type: 'SET_TEXT_FILTER', text}
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(text)
})

test('should set setStartDate filter', ()=>{
  const startDate = moment(0)
  const currentState = {
    text: '',
    sortBy: undefined,
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SET_START_DATE', startDate }
  const state = filtersReducer(currentState, action)
  expect(state.startDate).toEqual(startDate)
})

test('should set endDate filter', ()=>{
  const endDate = moment(0)
  const currentState = {
    text: '',
    sortBy: undefined,
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SET_END_DATE', endDate }
  const state = filtersReducer(currentState, action)
  expect(state.endDate).toEqual(endDate)
})
