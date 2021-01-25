import Button from 'components/Button';
import Input from 'components/Input';
import P from 'components/P';
import { memo, useState } from 'react';

const MemoButton = memo(Button);
const MemoP = memo(P);
const MemoInput = memo(Input);

const MemoExample = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
  });

  const onChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Submit');
  };

  console.log(state);

  return (
    <form onSubmit={onSubmit}>
      <MemoP>Text Here</MemoP>
      <MemoInput
        onChange={onChange}
        name='firstName'
        type='text'
        value={state.firstName}
        placeholder='First Name'
      />
      <MemoInput
        onChange={onChange}
        name='lastName'
        type='text'
        value={state.lastName}
        placeholder='Last Name'
      />
      <MemoButton type='submit'>Submit</MemoButton>
    </form>
  );
};

export default MemoExample;
