import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export const TenantSummary = ()=>{

  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>There are <span>5</span> active tenants</h1>
        <div className='page-header__actions'>
          <Link className='button-tenant' to='/addtenant'>Add Tenant</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  console.log('lLL', state)
}

export default connect(mapStateToProps)(TenantSummary)
