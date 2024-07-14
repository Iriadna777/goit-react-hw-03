import React, { useState, useEffect } from 'react';
// import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox contacts={contacts} setContacts={setContacts} />
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
