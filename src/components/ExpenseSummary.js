import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expenseTotal from '../selectors/expenses-total'
import numeral from 'numeral';


export const ExpenseSummary = ({ expensesCount, expenseTotal })=>{
    const label = expensesCount===1 ? 'expense' : 'expenses'
    const dollarAmount = numeral(expenseTotal/100).format('$0,0.00')
    return(
      <div>
         <h1>Viewing {expensesCount} {label} totalling {dollarAmount} </h1>
      </div>
    )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesCount: visibleExpenses.length,
    expenseTotal: expenseTotal(visibleExpenses)
  }
}


export default connect(mapStateToProps)(ExpenseSummary)
