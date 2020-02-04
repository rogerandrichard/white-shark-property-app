import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.transaction ? props.transaction.location : '',
      typeIncome: props.transaction ? props.transaction.typeIncome : '',
      description: props.transaction ? props.transaction.description : '',
      note: props.transaction ? props.transaction.note : '',
      amount: props.transaction ? (props.transaction.amount / 100).toString() : '',
      createdAt: props.transaction ? moment(props.transaction.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onLocationChange = (e) => {
    const location = e.target.value
    this.setState(()=>({ location }))
  }

  onTypeIncomeChange = (e) => {
    const typeIncome = e.target.value
    this.setState(()=>({ typeIncome }))
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        location: this.state.location,
        typeIncome: this.state.typeIncome,
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (

      <form className='form' onSubmit={this.onSubmit}>
        Income:{ this.state.typeIncome }
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          className='text-input'
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <select
          className='select'
          value={this.state.typeIncome}
          onChange={this.onTypeIncomeChange}
        >
          <option value="">All $</option>
          <option value="Revenue">Revenue</option>
          <option value="Expense">Expense</option>
        </select>



        <select
          className='select'
          value={this.state.location}
          onChange={this.onLocationChange}
        >
          <option value="all">All Locs</option>
          <option value="27 Highland Drive">27 Highland Drive</option>
          <option value="47 Highland Avenue">47 Highland Avenue</option>
          <option value="88 Osler Street">88 Osler Street</option>
          <option value="36 Morse Street">36 Morse Street</option>
          <option value="249 Chisholm Avenue">249 Chisholm Avenue</option>
          <option value="833 SE 2nd Avenue">833 SE 2nd Avenue</option>
          <option value="127 Empire Avenue">127 Empire Avenue</option>
          <option value="23 Deneb Street">23 Deneb Street</option>
          <option value="9 Leggot Avenue">9 Leggot Avenue</option>
          <option value="12 Leggot Avenue">12 Leggot Avenue</option>
        </select>

        <input
          className='text-input'
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className='textarea'
          placeholder="Add a note for your transaction (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className='button'>Save Transaction</button>
        </div>
      </form>
    )
  }
}
