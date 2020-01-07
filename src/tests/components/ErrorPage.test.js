import React from 'react'
import { shallow } from 'enzyme'
import ErrorPage from '../../components/ErrorPage'

test('should render ErrorPage', ()=>{
  const wrapper = shallow(<ErrorPage />)
  expect(wrapper).toMatchSnapshot()
})
