import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Input from 'components/Input';
import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';

const MemoInput = memo(Input);
const MemoCheckbox = memo(Checkbox);
const MemoButton = memo(Button);

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({
    description: '',
    fullTime: true,
    location: '',
  });

  const onChange = useCallback((event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <MemoInput
        onChange={onChange}
        type='text'
        value={state.description}
        placeholder='Enter your ideal description of the job here'
        name='description'
      />
      <MemoCheckbox
        name='fullTime'
        checked={state.fullTime}
        onChange={onChange}
      />
      <MemoInput
        onChange={onChange}
        type='text'
        value={state.location}
        placeholder='Enter your ideal location of the job here'
        name='location'
      />
      <MemoButton type='submit'>Submit</MemoButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form``;
