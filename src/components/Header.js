import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth'
import { connect } from 'react-redux'
import Photo from './PhotoPage'


export const Header = ({ startLogout }) => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__content'>
        <Link className="header__title" to="/dashboard">
          <h1>White Shark Property App</h1>
        </Link>
        <Photo />
        <button className='button button--link' onClick={startLogout}>Log Out</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch)=>({
  startLogout: ()=>dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
