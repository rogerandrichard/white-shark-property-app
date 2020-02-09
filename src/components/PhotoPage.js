import React from 'react'
import { connect } from 'react-redux'

const PhotoPage = (props)=>(
  <div>
    <img className='photo__image' src='/images/me.jpeg' />
  </div>
)

const mapStateToProps = (state)=>{
  return {
    photo: ()=> state.auth.photoURL
  }
}

export default connect(mapStateToProps)(PhotoPage)
