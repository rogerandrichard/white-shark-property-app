import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import TransactionList from './TransactionList';
import TransactionListFilters from './TransactionListFilters';
import TransactionSummary from './TransactionSummary'
import { startSetTransactions } from '../../actions/property/transactions';
import { startSetDescriptions } from '../../actions/descriptions/descriptions'




class PropertyDashboardPage extends React.Component {

  componentDidMount(){
    this.props.startSetTransactions()
    this.props.startSetDescriptions()
  }

  render(){
    return(
      <div>
        <TransactionSummary />
        <TransactionListFilters />
        <TransactionList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=>(
  {
    startSetTransactions: ()=>{dispatch(startSetTransactions())},
    startSetDescriptions: ()=>{dispatch(startSetDescriptions())}
  }
)

export default connect(undefined, mapDispatchToProps)(PropertyDashboardPage);
