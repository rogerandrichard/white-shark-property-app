import moment from 'moment'
import {
  setEndDate,
  setStartDate,
  sortByDate,
  sortByAmount,
  setTextFilter } from '../../actions/filters'

test('should sort by date', ()=>{
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should sort by amount', ()=>{
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('set text filter with value', ()=>{
  const text = 'test'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('set text filter with no value', ()=>{
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})



test('should generate set start date action object', ()=>{
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set start date action object no param', ()=>{
  const action = setStartDate()
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: undefined
  })
})




test('should generate set end date action object', ()=>{
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})
