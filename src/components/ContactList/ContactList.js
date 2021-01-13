import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

export default function ContactList({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func,
};
