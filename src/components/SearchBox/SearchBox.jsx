import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
    <label htmlFor="search" className={styles.label}>
      Find contacts by name
    </label>
    <input
      className={styles.input}
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
      id="search"
    />
  </div>
  );
};

export default SearchBox;
