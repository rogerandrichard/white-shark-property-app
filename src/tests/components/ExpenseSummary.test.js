import React from 'react'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test('should render summary of one expense correctly', ()=>{
  const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render summary of two expenses correctly', ()=>{
  const wrapper = shallow(<ExpenseSummary expenses={[expenses[0], expenses[1]]}/>)
  expect(wrapper).toMatchSnapshot()
})
