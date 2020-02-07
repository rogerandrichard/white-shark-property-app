import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from '../components/property/Header';
import Menu from '../components/property/TransactionMenu'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
   ...rest
})=>(
  <Route {...rest} component={(props)=>(
    isAuthenticated ? (
      <div>
        <Header />
        <Menu />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )} />

)

const mapStateToProps = (state)=>({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
