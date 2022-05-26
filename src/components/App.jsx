import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import s from './phonebook.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
// import Section from './Section';
// import Notification from './Notification';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      console.log(contacts)
      const isContact = contacts.find(contact => contact.name === name);
      if (isContact) {
        Notiflix.Notify.failure(`${name} is already in contact`);
        return contacts;
      } else {
        return {
          contacts: [
            {
              id: nanoid(),
              name,
              number,
            },
            ...contacts,
          ],
        };
      }
    });
  };

  render() {
    return (
      <div className={s.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
