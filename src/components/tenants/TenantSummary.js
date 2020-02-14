import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectTenants from '../../selectors/tenants/tenants';



const TenantSummary = (props)=>{

  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>There are <span>{ props.number_tenants }</span> filtered tenants</h1>
        <div className='page-header__actions'>
          <Link className='button-tenant' to='/addtenant'>Add Tenant</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  const tenants = selectTenants(state.tenants, state.tenantsFilters)
  return {
    number_tenants: tenants.length
  }
}

export default connect(mapStateToProps)(TenantSummary)
