import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import { address_array } from '../../../property-data/address_objects'



export default class TenantForm extends React.Component {
  constructor(props) {

    super(props)
    let legit_endDate = undefined
    if(props.tenant.startDate < props.tenant.endDate){
      legit_endDate = moment(props.tenant.endDate)
    }else{
      legit_endDate = undefined
    }

    this.state = {
      address: props.tenant ? props.tenant.address : 'None Selected',
      name: props.tenant ? props.tenant.name : '',
      home:  props.tenant ? props.tenant.home : '',
      cell: props.tenant ? props.tenant.cell : '',
      email: props.tenant ? props.tenant.email : '',
      startDate: props.tenant ? moment(props.tenant.startDate) : moment(),
      endDate: props.tenant && legit_endDate ? legit_endDate : moment(0),
      notes: props.tenant ? props.tenant.notes : '',
      active: props.tenant && legit_endDate ? 'InActive' : 'Active',
      rent: props.tenant ? props.tenant.rent : '',
      address_array: [],
      calendarStartFocused: false,
      calendarEndFocused: false,
      error: ''
    }
  }

  componentDidMount(){
    this.setState({
      address_array: address_array()
    })
  }

  onNameChange = (e)=>{
    const name = e.target.value
    this.setState({ name })
  }

  onRentChange = (e)=>{
    const rent = e.target.value
    this.setState({ rent })
  }

  onAddressChange = (e)=>{
    const address = e.target.value
    this.setState({ address })
  }

  onHomeChange = (e)=>{
    const home = e.target.value
    this.setState({ home })
  }

  onCellChange = (e)=>{
    const cell = e.target.value
    this.setState({ cell })
  }

  onEmailChange = (e)=>{
    const email = e.target.value
    this.setState({ email })
  }

  onStartFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarStartFocused: focused }));
  };

  onStartDateChange = (startDate)=>{
    if(startDate){
      this.setState(()=>({ startDate }))
    }
  }

  onActiveChange = (e)=>{
    const active = e.target.value
    this.setState({ active })
    if(active==='Active'){
      console.log('End Date$$', active)
      this.setState(() => ({ endDate: undefined }));
    }else if(active==='InActive'){
      console.log('End Date$$', active)
      this.setState(() => ({ endDate: moment() }));
    }
  }

  onEndFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarEndFocused: focused }));
  };

  onEndDateChange = (endDate)=>{
    if(endDate){
      this.setState(()=>({ endDate }))
    }
  }

  onNotesChange = (e)=>{
    const notes = e.target.value
    this.setState({ notes })
  }

  onSubmit = (e)=>{
    e.preventDefault()
    if (!this.state.name || this.state.address==='None Selected' ) {
      let error = 'Please provide '
      if(!this.state.name){ error+='Name / ' }
      if(this.state.address==='None Selected'){ error+='Address / ' }
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ error: '' }));
      let endDate = 0
      if(this.state.endDate){
        endDate = this.state.endDate.valueOf()
      }
      this.props.onSubmit({
        address: this.state.address,
        name: this.state.name,
        home:  this.state.home,
        cell: this.state.cell,
        email: this.state.email,
        startDate: this.state.startDate.valueOf(),
        endDate: endDate,
        rent: parseFloat(this.state.rent, 10) * 100,
        notes: this.state.notes
      })
    }
  }

  render(){
    return(
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
          <input
          type='text'
          className='text-input'
          placeholder='Name'
          value={ this.state.name }
          autoFocus
          onChange = { this.onNameChange }
        />
        <select
          className='select'
          value = { this.state.address }
          onChange = { this.onAddressChange }
        >
          { this.state.address_array.map((item)=>(
            <option key={item}>{item}</option>
          ))}
        </select>
        <input
          type='text'
          className='text-input'
          placeholder='Home'
          value={ this.state.home }
          onChange = { this.onHomeChange }
        />
        <input
          type='text'
          className='text-input'
          placeholder='Cell'
          value={ this.state.cell }
          onChange = { this.onCellChange }
        />
        <input
          type='text'
          className='text-input'
          placeholder='Email'
          value={ this.state.email }
          onChange = { this.onEmailChange }
        />
        <SingleDatePicker
          id='start'
          date={this.state.startDate}
          onDateChange={this.onStartDateChange}
          focused={this.state.calendarStartFocused}
          onFocusChange={this.onStartFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <select
          className='select'
          value = { this.state.active }
          onChange = { this.onActiveChange }
        >
          <option key='Active'>Active</option>
          <option key='InActive'>InActive</option>
        </select>

        { this.state.active==='InActive' ?
        <SingleDatePicker
          id='end'
          date={this.state.endDate}
          onDateChange={this.onEndDateChange}
          focused={this.state.calendarEndFocused}
          onFocusChange={this.onEndFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        : null }
        <input
          type='text'
          className='text-input'
          placeholder='Rent'
          value={ this.state.rent }
          autoFocus
          onChange = { this.onRentChange }
        />
        <textarea
          className='textarea_large'
          placeholder="Add a note for your tenant (optional)"
          value={this.state.notes}
          onChange={this.onNotesChange}
        />
        <button className='button' type='submit'>Submit</button>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
    </form>
    )
  }

}
