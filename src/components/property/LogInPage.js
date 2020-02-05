import React from 'react'
import { connect } from 'react-redux'
import { loginManual } from '../../actions/auth'
import AppRouter, { history } from '../../routers/AppRouter';
import { startSetTransactions } from '../../actions/property/transactions';



class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      password: '',
      errorMessage: ''
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
    if(this.state.password === '12161026'){
      console.log('State Password', this.state.password)
      this.props.loginManual({ name: this.state.name, password: this.state.password })
      this.props.startSetTransactions()
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
              className="login-input"
            />
            <input
              type='password'
              name='password'
              onChange = { this.onPasswordChange }
              className="login-input"
            />
          <button className="button_manual">Logins</button>
          </form>
          { this.state.errorMessage ? <span>{this.state.errorMessage}</span> : null }
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch)=>{
  return {
    loginManual: (obj)=>{dispatch(loginManual(obj))},
    startSetTransactions: ()=>{dispatch(startSetTransactions()).then(()=>{
        try {
          if (history.location.pathname === '/') {
            history.push('/dashboard')
          }
        }catch(e) {
            alert(e.message)
        }
      })}
  }
}


export default connect(undefined, mapDispatchToProps)(LoginPage)
