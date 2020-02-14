import React from 'react';
import { connect } from 'react-redux';
import TransactionListItem from './TransactionListItem';
import selectTransactions from '../../selectors/property/transactions';

export const TransactionList = (props) => (
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-for-mobile'>Transaction</div>
      <div className='show-for-desktop'>Transaction</div>
      <div className='show-for-desktop'>Amount</div>
    </div>
    <div className='list-body'>
    {
      props.transactions.length === 0 ? (
        <div>
          <span className='list-item list-item--message'>No Transactions</span>
        </div>
      ) : (
          props.transactions.map((transaction) => {
            return <TransactionListItem key={transaction.id} {...transaction} />;
          })
        )
    }



    </div>
  </div>
);

const mapStateToProps = (state) => (
  {
    transactions: selectTransactions(state.transactions, state.filters),
  }
)

export default connect(mapStateToProps)(TransactionList);
