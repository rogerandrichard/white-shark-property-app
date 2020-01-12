import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expenseTotal from '../selectors/expenses-total'
import numeral from 'numeral';


export const ExpenseSummary = (props)=>{
    const label = props.expenses.length===1 ? 'expense' : 'expenses'
    const dollarAmount = numeral(props.expenseTotal/100).format('$0,0.00')
    return(
      <div>
        {props.expenses.length !== 0
        && `Viewing ${props.expenses.length} ${label} totalling ${dollarAmount}`}
      </div>
    )
}

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters),
    expenseTotal: expenseTotal(selectExpenses(state.expenses, state.filters))
  })


export default connect(mapStateToProps)(ExpenseSummary)
