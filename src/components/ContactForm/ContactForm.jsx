import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const newContact = { id: nanoid(), ...values };
        onAddContact(newContact);
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form className={styles.contactForm}>
        <Field className={styles.contactFormInput} name="name" type="text" placeholder="Name" />
        <ErrorMessage name="name" component="div" className={styles.error} />
        <Field className={styles.contactFormInput} name="number" type="text" placeholder="Number" />
        <ErrorMessage name="number" component="div" className={styles.error} />
        <button type="submit" className={styles.addButton}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
