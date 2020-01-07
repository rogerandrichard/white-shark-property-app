import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'


export class AddExpensePage extends React.Component{
  onSubmit = (expense)=>{
    this.props.addExpense(expense)
    this.props.history.push('/')
  }

  render(){
    return (
      <div>
        Add Expense
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
     )
   }
 }

const mapDispatchToProps = (dispatch)=>({
    addExpense: (expense)=> dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)

// dispatch(addExpense(
//   {description: this.state.description,
//     amount: parseFloat(this.state.amount,10)*100,
//     createdAt: this.state.createdAt.valueOf(),
//     note: this.state.textarea
// }))
