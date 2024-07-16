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
      <Form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Field className={styles.field} name="name" type="text" />
        <ErrorMessage name="name" component="div" className={styles.error} />
        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <Field className={styles.field} name="number" type="text" />
        <ErrorMessage name="number" component="div" className={styles.error} />
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
