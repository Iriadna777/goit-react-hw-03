import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div className={styles.contact}>
      <p className={styles.contactName}>
        <FaUser className={styles.icon} /> {contact.name}
      </p>
      <p className={styles.contactNumber}>
        <FaPhoneAlt className={styles.icon} /> {contact.number}
      </p>
      <button 
      className={styles.deleteButton} 
      onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};


export default Contact;
