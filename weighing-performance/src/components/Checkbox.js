import styled from 'styled-components';
import PropTypes from 'prop-types';

const Checkbox = ({ onChange, checked, name }) => (
  <StyledCheckBox
    onChange={onChange}
    type='checkbox'
    checked={checked}
    name={name}
  />
);

const StyledCheckBox = styled.input``;

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
