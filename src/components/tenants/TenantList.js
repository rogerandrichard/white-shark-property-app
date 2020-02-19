import React from 'react'
import { connect } from 'react-redux'

import selectTenants from '../../selectors/tenants/tenants';
import TenantListItem from './TenantListItem'

const TenantList = (props)=> {
  if(props.tenants.nil){
    <LoadingPage />
  } else {
  return (
    <div className='content-container'>
      <div className='list-header'>
        <div className='show-for-mobile'>Tenant</div>
        <div className='show-for-desktop'>Tenant</div>
        <div className='show-for-desktop'>Contact</div>
      </div>
      <div className='list-body'>
        { props.tenants.map((tenant)=>(<TenantListItem key={tenant.address} {...tenant} />))}
      </div>
    </div>
  )
 }
}

const mapStateToProps = (state)=>{
  const tenants = selectTenants(state.tenants, state.tenantsFilters)
  return {
    tenants: tenants
  }
}



export default connect(mapStateToProps)(TenantList)
