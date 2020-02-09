import React from 'react'
import TenantForm from './TenantForm'


class AddTenantPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Peter'
    }
  }

  render(){
    return(
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Add Tenant</h1>
        </div>
        <div className='content-container'>
          <TenantForm />
        </div>
      </div>
    )
  }
}

export default AddTenantPage
