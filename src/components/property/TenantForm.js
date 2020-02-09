import React from 'react'
import { address_array } from '../../../property-data/address_objects'



class TenantForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: props.tenant ? props.tenant.address : '',
      name: props.tenant ? props.tenant.address : '',
      home:  props.tenant ? props.tenant.address : '',
      cell: props.tenant ? props.tenant.address : '',
      email: props.tenant ? props.tenant.address : '',
      startDate: props.tenant ? props.tenant.address : undefined,
      endDate: props.tenant ? props.tenant.address : undefined,
      test_array: []

    }
  }

  componentDidMount(){
    this.setState({
      test_array: address_array()
    })
  }

  onSubmit = (e)=>{
    e.preventDefault()
    console.log('Submitted Form')
  }

  render(){
    return(
      <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            className='text-input'
            placeholder='Name'
            value={ this.state.name }
          />
          <select
            className='select'

          >
            { this.state.test_array.map((item)=>(
              <option key={item}>{item}</option>
            ))}
          </select>
          <button className='button' type='submit'>Submit</button>
        </form>
    )
  }

}

export default TenantForm
