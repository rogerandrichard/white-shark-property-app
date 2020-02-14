import React from 'react'
import TenantForm from './TenantForm'
import { connect } from 'react-redux'
import { startAddTenantProfile } from '../../actions/tenants/tenants'




class AddTenantPage extends React.Component {

  onSubmit = (tenant) => {
    this.props.startAddTenant(tenant);
    this.props.history.push('/tenants');
  };

  render(){
    return(
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Add Tenant</h1>
        </div>
        <div className='content-container'>
          <TenantForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>({
  startAddTenant: (tenantData)=>dispatch(startAddTenantProfile(tenantData))
})

export default connect(undefined, mapDispatchToProps)(AddTenantPage)
