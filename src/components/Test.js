import React from 'react'
import { connect } from 'react-redux'

const Test = (props)=>{
  console.log('Props', props)
  return(
    <div>
      <h1>Nut {props.name}</h1>
    </div>
  )
}

const mapStateToProps = (state, props)=>{
  console.log('State1', state)
  console.log('Props1', props)
  return {
    ...props,
    mycheck: 'Pee'
  }
}

export default connect(mapStateToProps)(Test)
