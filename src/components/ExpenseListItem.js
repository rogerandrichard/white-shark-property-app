import React from 'react'
import { Link } from 'react-router-dom'



const ExpenseListItem = ({id, description, amount = 0, createdAt = 0})=>(
  <li>
    <p>{ description }</p>
    <p>{ amount }</p>
    <p>{ createdAt.toString() }</p>
  <Link to={`/edit/${id}`}>
    Edit
  </Link>
  </li>
)

export default ExpenseListItem
