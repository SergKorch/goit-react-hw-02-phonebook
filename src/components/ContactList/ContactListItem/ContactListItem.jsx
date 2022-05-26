import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ nameContact, number }) => {
  return (
    <li>
     <p>{nameContact}: {number}</p>
    </li>
  );
};
ContactListItem.propTypes = {
    nameContact: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
export default ContactListItem;
