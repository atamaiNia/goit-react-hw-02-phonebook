import PropTypes from 'prop-types';
import { Item, ContactInfo, BtnDelete } from './Contact.styled';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item key={id}>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </BtnDelete>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
