import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter, sortByType, sortByAddress } from '../../actions/tenants/filters';
import { address_array }  from '../../../property-data/address_objects'


export class TenantListFilters extends React.Component {
  state = {
    calendarFocused: null,
    address_array: []
  }

  componentDidMount(){
    this.setState({
      address_array: address_array()
    })
  }

  onNameChange = (e) => {
    this.props.setNameFilter(e.target.value);
  }

  onSortType = (e) => {
    const type = e.target.value
    console.log('TTTTYYYYPPEEEE', type)
    this.props.sortByType(type);
  }

  onSortAddress = (e) => {
    if (e.target.value === 'None Selected') {
      this.props.sortByAddress('');
    } else {
      this.props.sortByAddress(e.target.value)
    }
  };

  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              className='text-input'
              type="text"
              value={this.props.filters.name}
              onChange={this.onNameChange}
              placeholder='Search Tenants...'
              size='20'
            />
          </div>

          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortByType}
              onChange={this.onSortType}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
            </select>
          </div>

          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortByAddress}
              onChange={this.onSortAddress}
            >
              { this.state.address_array.map((item)=>(
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.tenantsFilters
  }
};

const mapDispatchToProps = (dispatch) => ({
  setNameFilter: (text) => dispatch(setNameFilter(text)),
  sortByType: (typeTenant) => dispatch(sortByType(typeTenant)),
  sortByAddress: (location) => dispatch(sortByAddress(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TenantListFilters);
