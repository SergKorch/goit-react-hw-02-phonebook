import React, { Component } from 'react';
import ContactListItem from './ContactListItem';


const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return contacts.length > 0 ? (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} nameContact={name} number={number} deleteContact={deleteContact}/>
      ))}
    </ul>
  ) : (
    <p>No find</p>
  );
};

// ContactList.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
export default ContactList;
