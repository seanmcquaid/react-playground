import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { useState } from 'react';
import styled from 'styled-components';

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({
    description: '',
    fullTime: true,
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
      <Input
        onChange={onChange}
        type='text'
        value={state.description}
        placeholder='Enter your ideal description of the job here'
        name='description'
      />
      <Checkbox name='fullTime' checked={state.fullTime} onChange={onChange} />
      <Input
        onChange={onChange}
        type='text'
        value={state.location}
        placeholder='Enter your ideal location of the job here'
        name='location'
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default Form;

const Label = styled.label``;
