import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByType, sortByLocation, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/property/filters';

export class TransactionListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
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
    } else if (e.target.value === '27 Highland Drive') {
      this.props.sortByLocation('27 Highland Drive');
    } else if (e.target.value === '47 Holland Avenue') {
      this.props.sortByLocation('47 Holland Avenue');
    } else if (e.target.value === '88 Osler Street') {
      this.props.sortByLocation('88 Osler Street');
    } else if (e.target.value === '36 Morse Street') {
      this.props.sortByLocation('36 Morse Street');
    } else if (e.target.value === '249 Chisholm Avenue') {
      this.props.sortByLocation('249 Chisholm Avenue');
    } else if (e.target.value === '833 SE 2nd Avenue') {
      this.props.sortByLocation('833 SE 2nd Avenue');
    } else if (e.target.value === '127 Empire Avenue') {
      this.props.sortByLocation('127 Empire Avenue');
    } else if (e.target.value === '23 Deneb Street') {
      this.props.sortByLocation('23 Deneb Street');
    } else if (e.target.value === '9 Leggot Avenue') {
      this.props.sortByLocation('9 Leggot Avenue');
    } else if (e.target.value === '12 Leggot Avenue') {
      this.props.sortByLocation('12 Leggot Avenue');
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
              <option value="All Locs">All Locs</option>
              <option value="27 Highland Drive">27 Highland Drive</option>
              <option value="47 Holland Avenue">47 Holland Avenue</option>
              <option value="88 Osler Street">88 Osler Street</option>
              <option value="36 Morse Street">36 Morse Street</option>
              <option value="249 Chisholm Avenue">249 Chisholm Avenue</option>
              <option value="833 SE 2nd Avenue">833 SE 2nd Avenue</option>
              <option value="127 Empire Avenue">127 Empire Avenue</option>
              <option value="23 Deneb Street">23 Deneb Street</option>
              <option value="9 Leggot Avenue">9 Leggot Avenue</option>
              <option value="12 Leggot Avenue">12 Leggot Avenue</option>
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

const mapStateToProps = (state) => {
  return {
  filters: state.filters
  }
};

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
