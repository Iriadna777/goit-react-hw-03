import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ contacts, setContacts }) => {
  const filterContacts = event => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  return (
    <div className={styles.searchBox}>
    <input className={styles.searchBoxInput} type="text" placeholder="Find contacts by name" onChange={filterContacts} />
  </div>
  );
};

export default SearchBox;
