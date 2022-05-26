import React, { Component } from 'react';
import ContactListItem from './ContactListItem';

 const ContactList = ({contacts}) => {
  return (
    <ul>
      {contacts.map(({id, name, number}) => (
        <ContactListItem key={id} nameContact={name} number={number} />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
export default ContactList;
