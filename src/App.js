import React, { useState, useEffect, useRef } from 'react';
import shortid from 'shortid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
    { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
    { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const numberOfRender = useRef(1);
  const filteredContacts = getFilteredContacts();

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      if (numberOfRender.current === 1) {
        setContacts(parsedContacts);
      }

      if (JSON.stringify(contacts) === localStorage.getItem('contacts')) {
      } else {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    } else {
      if (contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    }

    numberOfRender.current += 1;
  }, [contacts]);

  const addContact = e => {
    const { nameInput, phoneInput } = e.target.form;

    e.preventDefault();

    if (checkAddedContact(e)) {
      alert(`${nameInput.value} is already in contacts`);
      return;
    }

    setContacts(prevContacts => {
      const newContact = [
        {
          id: shortid.generate(),
          name: nameInput.value,
          number: phoneInput.value,
        },
      ];

      return [...prevContacts, ...newContact];
    });

    setTimeout(() => {
      clearInputs(e);
    });
  };

  const clearInputs = e => {
    const { nameInput, phoneInput } = e.target.form;

    nameInput.value = '';
    phoneInput.value = '';
  };

  const changeFilter = e => {
    // this.setState({ filter: e.currentTarget.value });
    setFilter(e.currentTarget.value);
  };

  function getFilteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  const checkAddedContact = e => {
    return contacts.find(
      contact => contact.name === e.target.form.nameInput.value,
    );
  };

  const deleteContact = e => {
    setContacts(contacts.filter(contact => contact.id !== e.target.id));
    // this.setState({
    //   contacts: this.state.contacts.filter(
    //     contact => contact.id !== e.target.id,
    //   ),
    // });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter onChange={changeFilter} />

      <ContactList contacts={filteredContacts} onClick={deleteContact} />
    </div>
  );
}
