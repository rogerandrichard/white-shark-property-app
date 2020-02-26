import React from 'react';
import { connect } from 'react-redux';
import TransactionForm from './TransactionForm';
import { startAddTransaction } from '../../actions/property/transactions';
import sortedDescriptions from '../../selectors/descriptions/descriptions'


export class AddTransactionPage extends React.Component {

  onSubmit = (transaction) => {
    this.props.startAddTransaction(transaction);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Transaction</h1>
          </div>
        </div>
        <div className='content-container'>
          <TransactionForm
            descriptions={this.props.descriptions}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>(
  {
    descriptions: sortedDescriptions(state.descriptions)
  }
)


const mapDispatchToProps = (dispatch) => ({
  startAddTransaction: (transaction) => dispatch(startAddTransaction(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionPage);
