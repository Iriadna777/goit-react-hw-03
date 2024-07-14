import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div className={styles.contactItem}>
      <span className={styles.contactInfo}>
        <FaUser className={styles.icon} /> {contact.name}
      </span>
      <span className={styles.contactInfo}>
        <FaPhoneAlt className={styles.icon} /> {contact.number}
      </span>
      <button className={styles.deleteButton} onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};


export default Contact;
