import React from 'react'

import { Link, NavLink } from 'react-router-dom';


const TransactionMenu = ()=>(
  <div className='menu'>
    <div className='content-container'>
      <div className='menu__content'>
        <NavLink activeClassName="menu__active" className="menu__title" to="/dashboard"><h4>Transaction Dashboard</h4></NavLink>
        <NavLink activeClassName="menu__active" className="menu__title" to="/tenants"><h4>Tenant Dashboard</h4></NavLink>
        <NavLink activeClassName="menu__active" className="menu__title" to="/test"><h4>Renter Profiles(Shantz)</h4></NavLink>
      </div>
    </div>
  </div>


)

export default TransactionMenu
