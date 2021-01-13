import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.module.css';

export default function ContactForm({ addContact }) {
  return (
    <form>
      <label>
        Insert contact name
        <input type="text" name="nameInput" />
      </label>

      <label>
        Insert contact number
        <input type="text" name="phoneInput" />
      </label>

      <button type="submit" onClick={addContact}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
