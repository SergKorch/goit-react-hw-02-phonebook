import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({id, nameContact, number, deleteContact }) => {
  return (
    <li key={id}>
     <p>{nameContact}: {number}</p>
     <button className={s.deleteButton} type='button' onClick={()=>deleteContact(id)}>delete</button>
    </li>
  );
};
ContactListItem.propTypes = {
    nameContact: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
export default ContactListItem;
