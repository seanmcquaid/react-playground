import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({ onChange, type, value, placeholder }) => (
  <StyledInput
    onChange={onChange}
    type={type}
    value={value}
    placeholder={placeholder}
  />
);

const StyledInput = styled.input``;

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
