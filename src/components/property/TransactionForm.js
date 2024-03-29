import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import { address_array } from '../../../property-data/address_objects'




export default class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descTypes: props.descriptions,
      descType: '',
      location: props.transaction ? props.transaction.location : '',
      typeIncome: props.transaction ? props.transaction.typeIncome : '',
      description: props.transaction ? props.transaction.description : '',
      note: props.transaction ? props.transaction.note : '',
      amount: props.transaction ? (props.transaction.amount / 100).toString() : '',
      createdAt: props.transaction ? moment(props.transaction.createdAt) : moment(),
      calendarFocused: false,
      address_array: [],
      form_button: props.transaction ? 'Edit Transaction' : 'Add Transaction',
      error: ''
    };
  }

  componentDidMount(){
    this.setState({
      address_array: address_array()
    })
  }

  onDescTypeChange = (e) => {
    const descType = e.target.value
    console.log('PEEE', descType)
    this.setState(()=>({ descType }))
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

    if (!this.state.description || !this.state.amount || this.state.descType==='None Selected' || this.state.location==='None Selected' || this.state.typeIncome==='None Selected') {
      let error = 'Please provide '
      if(this.state.descType==='None Selected'){ error+='Desc Type / ' }
      if(!this.state.description){ error+='Description / ' }
      if(!this.state.amount){ error+='Amount / ' }
      if(this.state.location==='None Selected'){ error+='Location / ' }
      if(this.state.typeIncome==='None Selected'){ error+='Income Type / ' }
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        location: this.state.location,
        typeIncome: this.state.typeIncome,
        description: this.state.descType +'-' + this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };


  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <select
          className='select'
          onChange={this.onDescTypeChange}
        >
          { this.state.descTypes.map((item)=>(
            <option key={item}>{item}</option>
          ))}
        </select>
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
          <option value="None Selected">None Selected</option>
          <option value="Revenue">Revenue</option>
          <option value="Expense">Expense</option>
        </select>



        <select
          className='select'
          value={this.state.location}
          onChange={this.onLocationChange}
        >
          { this.state.address_array.map((item)=>(
            <option key={item}>{item}</option>
          ))}
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
          <button className='button'>{ this.state.form_button }</button>
        </div>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
      </form>
    )
  }
}
