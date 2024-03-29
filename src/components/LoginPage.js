import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startLogin_f } from '../actions/auth'

export const LoginPage = ({ startLogin })=>(
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">White Shark Property Managment</h1>
        <button className="button" onClick={ startLogin }>Login with Google</button>
        <button className="button" onClick={ startLogin_f }>Login with Facebook</button>
      </div>
    </div>
  )

const mapDispatchToProps = (dispatch)=>({
  startLogin: ()=>dispatch(startLogin()),
  startLogin_f: ()=>dispatch(startLogin_f())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
