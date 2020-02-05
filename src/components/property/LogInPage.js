import React from 'react'
import { connect } from 'react-redux'
import { loginManual } from '../../actions/auth'
import AppRouter, { history } from '../../routers/AppRouter';


class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }

  onNameChange = (e)=>{
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  onPasswordChange = (e)=>{
    e.preventDefault()
    this.setState({
      password: e.target.value
    })
  }

  onSubmit= (e)=>{
    e.preventDefault()
    console.log('State', this.state)
    this.props.loginManual({ name: this.state.name, password: this.state.password })
    try {
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    }catch(e) {
      alert(e.message)
    }
  }

  render(){
    return(
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">White Shark Property Managment</h1>
          <form onSubmit={ this.onSubmit }>
            <input
              name='name'
              onChange = { this.onNameChange }
            />
            <input
              type='password'
              name='password'
              onChange = { this.onPasswordChange }
            />
            <button className="button">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    loginManual: (obj)=>{dispatch(loginManual(obj))}
  }
}


export default connect(undefined, mapDispatchToProps)(LoginPage)
