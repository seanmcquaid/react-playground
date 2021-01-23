import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ onClick, type, children }) => (
  <StyledButton onClick={onClick} type={type}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button``;

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Button;
