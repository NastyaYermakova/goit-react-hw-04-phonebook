import PropTypes from 'prop-types';
import { ContactItem, ContactData, ButtonDelete } from './Contact.styled';

export function Contact({ id, name, number, deleteContact }) {
  return (
    <ContactItem key={id}>
      <ContactData>
        {name}: <span>{number}</span>
      </ContactData>
      <ButtonDelete type="button" onClick={() => deleteContact(id)}>
        Delete
      </ButtonDelete>
    </ContactItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
