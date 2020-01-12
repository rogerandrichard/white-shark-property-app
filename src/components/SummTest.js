import React from 'react';
import { connect } from 'react-redux';

export default class SummTest extends React.Component {
  onTest = ()=>{
    return 'Test 2'
  }

  render(){
    return(
      <div>
        Test 1 {this.onTest()}
      </div>
    )
  }
};
