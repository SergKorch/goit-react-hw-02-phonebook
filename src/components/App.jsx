import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './phonebook.module.css';
import Form from './Form';
// import Statistics from './Statistics';
// import Section from './Section';
// import Notification from './Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formData = data => {
    console.log(data);
  };
  addContacts = data => {
    const contacts = {
      id: nanoid(),
      data,
    }
    this.setState(prevState =>{ datas: [data, ...prevState.datas]})
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

        <Form onSubmit={this.formData}/>
        {/* <ContactList onSubmit={this.addContacts}/> */}
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input />
        <p>Jon Dou: 000-000-00-00</p>
        <p>Jon Dou: 000-000-00-00</p>
        <p>Jon Dou: 000-000-00-00</p>
        <p>Jon Dou: 000-000-00-00</p>
      </div>
    );
  }
}
