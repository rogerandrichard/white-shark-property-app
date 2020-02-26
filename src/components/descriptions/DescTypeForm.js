import React from 'react'


export default class DescTypeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      descriptions: props.descriptions,
      form_button: 'Add Description',
      error: ''
    };
  }


  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description ) {
      let error = 'Description cannot be blank '
      this.setState(() => ({ error }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
      });
    }
  };


  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input
          className='text-input'
          type="text"
          placeholder="New Description Entry"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <div>
          <button className='button'>{ this.state.form_button }</button>
        </div>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <h2>Current Descriptions</h2> { this.props.descriptions.map((desc, index)=>(
          <li key={index}>{desc}</li>
        ))}

      </form>
    )
  }
}
