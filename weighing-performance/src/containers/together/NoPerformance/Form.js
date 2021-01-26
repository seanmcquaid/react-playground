import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { memo, useState } from 'react';
import styled from 'styled-components';

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({
    description: '',
    fullTime: false,
    location: '',
  });

  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input />
      <Checkbox name='fullTime' checked={state.fullTime} onChange={onChange} />
      <Input />
      <Button></Button>
    </form>
  );
};

export default Form;

const Label = styled.label``;
