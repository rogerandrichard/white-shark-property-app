import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectTransactions from '../../selectors/property/transactions'
import transactionTotal from '../../selectors/property/transactions-total'
import numeral from 'numeral';


export const TransactionSummary = ({ transactionsCount, transactionTotal })=>{
    const label = transactionsCount===1 ? 'transaction' : 'transactions'
    const dollarAmount = numeral(transactionTotal/100).format('$0,0.00')
    return(
      <div className='page-header'>
         <div className='content-container'>
           <h1 className='page-header__title'>Viewing <span>{transactionsCount}</span> {label} totalling <span>{dollarAmount}</span> </h1>
           <div className='page-header__actions'>
             <Link className='button' to='/create'>Add Transaction</Link>
           </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  const visibleTransactions = selectTransactions(state.transactions, state.filters)
  return {
    transactionsCount: visibleTransactions.length,
    transactionTotal: transactionTotal(visibleTransactions)
  }
}


export default connect(mapStateToProps)(TransactionSummary)
