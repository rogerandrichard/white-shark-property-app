import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin })=>(
    <div>
      <h3>Log In</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td></td>
          </tr>
          <tr>
            <th>Password</th>
            <td></td>
          </tr>
          <tr>
            <th colSpan={2}>
              <button onClick={ startLogin }>Log In</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )

const mapDispatchToProps = (dispatch)=>({
  startLogin: ()=>dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
