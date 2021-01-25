import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({ onChange, type, value, placeholder, name }) => (
  <StyledInput
    onChange={onChange}
    type={type}
    value={value}
    placeholder={placeholder}
    name={name}
  />
);

const StyledInput = styled.input``;

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
