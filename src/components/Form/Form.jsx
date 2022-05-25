import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './form.module.css';
import { nanoid } from 'nanoid';
// import ButtonItem from './ButtonItem';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInpId=nanoid()
  numbInpId=nanoid()
  changeInp = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  submitInp = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.props.addContacts
    this.reset()
  };
  reset = () => {
    this.setState({name:"", number: ""})
  }
  render() {
    return (
      <form onSubmit={this.submitInp}>
        <label htmlFor={this.nameInpId}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.changeInp}
            id={this.nameInpId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numbInpId}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.changeInp}
            id={this.numbInpId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
export default Form;
