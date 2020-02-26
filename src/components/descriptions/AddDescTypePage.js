import React from 'react'
import { connect } from 'react-redux'
import { startSetDescriptions, startAddDescription } from '../../actions/descriptions/descriptions'
import sortedDescriptions from '../../selectors/descriptions/descriptions'
import DescTypeForm from './DescTypeForm'


class AddDescTypePage extends React.Component {

  // componentDidMount(){
  //   this.props.startSetDescriptions()
  // }

  onSubmit = (description)=>{
    this.props.startAddDescription(description)
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Description</h1>
          </div>
        </div>
        <div className='content-container'>
          <DescTypeForm
            onSubmit= {this.onSubmit}
            descriptions = { this.props.descriptions }
          />
        </div>
      </div>
    );
  }



}

const mapStateToProps = (state)=>{
  const descriptions = state.descriptions
  const sortD = sortedDescriptions(descriptions)
  return {
    descriptions: sortD
  }
}

const mapDispatchToProps = (dispatch)=>(
  {
    startAddDescription: (description)=>{dispatch(startAddDescription(description))}
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(AddDescTypePage)
