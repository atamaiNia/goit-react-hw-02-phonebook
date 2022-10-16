import PropTypes from 'prop-types';
import { Container, Label, Input } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Container>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </Container>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
