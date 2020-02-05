import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth'
import { connect } from 'react-redux'
import Photo from '../PhotoPage'


export const Header = (props) => {

  const logMeOut = ()=>{
    props.logout()
  }

  return(
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <Link className="header__title" to="/dashboard">
            <h1>White Shark Property App</h1>
          </Link>
          <Photo />
          <button className='button button--link' onClick={ logMeOut }>Log Out</button>
        </div>
      </div>
    </header>
  )
}

const mapDispatchToProps = (dispatch)=>({
  logout: ()=>dispatch(logout())
})

export default connect(undefined, mapDispatchToProps)(Header);
