import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByType, sortByLocation, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/property/filters';
import { address_array }  from '../../../property-data/address_objects'


export class TransactionListFilters extends React.Component {
  state = {
    calendarFocused: null,
    address_array: []
  }

  componentDidMount(){
    this.setState({
      address_array: address_array()
    })
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }

  onSortType = (e) => {
    if (e.target.value === 'All $') {
      this.props.sortByType('');
    } else if (e.target.value === 'Revenue') {
      this.props.sortByType('Revenue');
    } else if (e.target.value === 'Expense') {
      this.props.sortByType('Expense');
    }
  }

  onSortAddress = (e) => {
    if (e.target.value === 'All Locs') {
      this.props.sortByLocation('');
    } else {
      this.props.sortByLocation(e.target.value)
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
              value={this.props.filters.text}
              onChange={this.onTextChange}
              placeholder='Search Transactions...'
              size='10'
            />
          </div>

          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortByType}
              onChange={this.onSortType}
            >
              <option value="All $">All $</option>
              <option value="Revenue">Revenue</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortByLoc}
              onChange={this.onSortAddress}
            >
              { this.state.address_array.map((item)=>(
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div><br/>
          <div className='input-group__item'>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => (
  { filters: state.filters }
);

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByType: (type) => dispatch(sortByType(type)),
  sortByLocation: (location) => dispatch(sortByLocation(location)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionListFilters);
