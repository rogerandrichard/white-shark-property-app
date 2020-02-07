import React from 'react';
import { connect } from 'react-redux';
import TransactionForm from './TransactionForm';
import { startEditTransaction, startRemoveTransaction } from '../../actions/property/transactions';
import ConfirmModal from './ConfirmModal'

export class EditTransactionPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: undefined,
    };
  }

  onSubmit = (transaction) => {
    this.props.startEditTransaction(this.props.transaction.id, transaction);
    this.props.history.push('/dashboard');
  }

  onRemove = ()=>{
    this.setState(()=>({selectedOption: true}))
  }

  killTransaction = () => {
    this.setState(()=>({selectedOption: false}))
    this.props.startRemoveTransaction({ id: this.props.transaction.id });
    this.props.history.push('/dashboard');
  }

  noKillTransaction = () => {
    this.setState(()=>({selectedOption: false}))
  }

  render() {
    return (
      <div>
        <ConfirmModal selectedOption={this.state.selectedOption} killTransaction={()=>{this.killTransaction()}}  noKillTransaction={()=>{this.noKillTransaction()}} />
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Transaction</h1>
          </div>
        </div>
        <div className='content-container'>
          <TransactionForm
            transaction={this.props.transaction}
            onSubmit={this.onSubmit}
          />
        <button className='button button--secondary' onClick={this.onRemove}>Remove Transaction</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
  transaction: state.transactions.find((transaction) => transaction.id === props.match.params.id)
}};

const mapDispatchToProps = (dispatch, props) => ({
  startEditTransaction: (id, transaction) => dispatch(startEditTransaction(id, transaction)),
  startRemoveTransaction: (data) => dispatch(startRemoveTransaction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTransactionPage);
