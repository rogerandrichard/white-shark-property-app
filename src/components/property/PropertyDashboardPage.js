import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import TransactionList from './TransactionList';
import TransactionListFilters from './TransactionListFilters';
import TransactionSummary from './TransactionSummary'
import { startSetTransactions } from '../../actions/property/transactions';



class PropertyDashboardPage extends React.Component {

  componentDidMount(){
    this.props.startSetTransactions()
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
    startSetTransactions: ()=>{dispatch(startSetTransactions()).then(()=>{
        try {
          // if (history.location.pathname === '/') {
          //   history.push('/dashboard')
          // }
        }catch(e) {
            alert(e.message)
        }
      })
    }
  }
)

export default connect(undefined, mapDispatchToProps)(PropertyDashboardPage);
