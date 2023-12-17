import { Formik } from 'formik';
import {
  FormWrapper,
  FormField,
  FormLabel,
  FormBtn,
} from './ContactForm.styled';

import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

const contactsSheme = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const conacts = useSelector(selectContacts);

  const handleSubmit = value => {
    const hasName = conacts.some(contact => contact.name === value.name);
    if (hasName) {
      alert(`${value.name} is already in contacts.`);
      return;
    } else {
      dispatch(addContact(value));
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactsSheme}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <FormWrapper>
        <FormLabel>
          Name
          <FormField name="name" />
        </FormLabel>
        <FormLabel>
          Number
          <FormField name="number" />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormWrapper>
    </Formik>
  );
};
