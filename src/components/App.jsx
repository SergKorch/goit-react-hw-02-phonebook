import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './phonebook.module.css';
// import FeedbackOptions from './FeedbackOptions';
// import Statistics from './Statistics';
// import Section from './Section';
// import Notification from './Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }
  // state = {
  //   contacts: [
  //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  //   ],
  //   filter: '',
  //   name: '',
  //   number: ''
  // }
  render() {
    return (
//       <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />
//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div>
      <div className={s.phonebook}>
        <h1>Phonebook</h1>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="button">Add contact</button>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input/>
        <p>Jon Dou: 000-000-00-00</p>
        <p>Jon Dou: 000-000-00-00</p>
        <p>Jon Dou: 000-000-00-00</p>
        <p>Jon Dou: 000-000-00-00</p>
      </div>
    );
  }
}
