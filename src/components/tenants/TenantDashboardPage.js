
import React from 'react'
import { connect } from 'react-redux'

import TenantSummary from './TenantSummary'
import TenantListFilters from './TenantListFilters'
import TenantList from './TenantList'
import { startSetTenants } from '../../actions/tenants/tenants'


class TenantDashboardPage extends React.Component{


  componentDidMount(){
    this.props.startSetTenants()
  }

  render(){
    return (
      <div>
        <TenantSummary />
        <TenantListFilters />
        <TenantList />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch)=>({
  startSetTenants: ()=>{dispatch(startSetTenants()).then(()=>{
      try {
        // if (history.location.pathname === '/') {
        //   history.push('/tenants')
        // }
      }catch(e) {
        alert(e.message)
      }
    })}
})

export default connect(undefined, mapDispatchToProps)(TenantDashboardPage)
