import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormikForm,
  FormikLabel,
  FormikField,
  ErrorText,
  FormikBtn,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('number is a required field'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('number is a required field'),
});

const initialValues = {
  name: '',
  number: '',
};

const FormikError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        return <ErrorText>{message}</ErrorText>;
      }}
    />
  );
};

const ContactForm = ({ onSubmitForm }) => {
  const handleSubmit = (value, { resetForm }) => {
    onSubmitForm(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormikForm autoComplete="off">
        <FormikLabel htmlFor="name">Name</FormikLabel>
        <FormikField type="text" name="name" />
        <FormikError name="name" />

        <FormikLabel htmlFor="number">Number</FormikLabel>
        <FormikField type="tel" name="number" />
        <FormikError name="number" />

        <FormikBtn type="submit">Add contact</FormikBtn>
      </FormikForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
