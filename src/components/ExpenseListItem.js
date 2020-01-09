import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'



const ExpenseListItem = ({id, description, amount = 0, createdAt = 0})=>(
  <li>
    <p>{ description }</p>
    <p>{ numeral(amount/100).format('$0,0.00') }</p>
    <p>{ moment(createdAt).format('MMMM Do, YYYY') }</p>
  <Link to={`/edit/${id}`}>
    Edit
  </Link>
  </li>
)

export default ExpenseListItem
