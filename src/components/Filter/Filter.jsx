import React, { Component } from 'react';

const Filter = ({ filter,  onChange}) => {
  return (
      <div>
    <label>
      <input type="text" value={filter} onChange={onChange}/>
    </label></div>
  );
};

{/* // ContactList.propTypes = { */}
{/* //   options: PropTypes.arrayOf(PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired,
// }; */}
export default Filter;
