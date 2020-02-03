import React from 'react'
import { connect } from 'react-redux'

const PhotoPage = (props)=>(
  <div>
    <img className='photo__image' src='/images/me.jpeg' />
  </div>
)

const mapStateToProps = (state)=>{
  console.log('map state to props', state.auth.photoURL)
  return {
    photo: ()=> state.auth.photoURL
  }
}

export default connect(mapStateToProps)(PhotoPage)
