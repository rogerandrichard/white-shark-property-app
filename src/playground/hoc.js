
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props)=>(
  <div>
    Nut {props.info}
  </div>
)

const withAdminWarning = (WrappedComponent)=>{
  return (props)=>(
    <div>
      { props.isAdmin && <p>This is private INFO, please do not share</p> }
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent)=>{
  return (props)=>(
    <div>
      { props.isAuth ? <WrappedComponent {...props} /> : <p>Sign In First</p>}

    </div>
  )
}

const AdminInfo = withAdminWarning(Info)

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info='crap' />, document.getElementById('app'))



//ReactDOM.render(<Test info='There are the details' />, document.getElementById('app'))
