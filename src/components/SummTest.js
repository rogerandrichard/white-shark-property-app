import React from 'react';
import { connect } from 'react-redux';

export default class SummTest extends React.Component {
  onTest = ()=>{
    return 'Nut Weiner'
  }

  render(){
    return(
      <div>
        Test {this.onTest()}
      </div>
    )
  }
};
