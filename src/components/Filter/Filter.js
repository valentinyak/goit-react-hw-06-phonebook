import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ onChange }) {
  return (
    <label>
      Find contact
      <input type="text" name="filterInput" onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
