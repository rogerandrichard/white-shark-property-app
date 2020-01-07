import React from 'react'
import { NavLink } from 'react-router-dom'


export default ()=>(
  <header>
    <h1>Expensify For Me</h1>
    <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink><br/>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/>
  </header>
)

//export default Header
