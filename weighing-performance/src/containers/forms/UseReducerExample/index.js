import Button from 'components/Button';
import Input from 'components/Input';
import P from 'components/P';
import { useReducer } from 'react';

const UseReducerExample = () => {
  const [state, change] = useReducer(
    (prevState, newState) => ({
      ...prevState,
      ...newState,
    }),
    {
      firstName: '',
      lastName: '',
    }
  );

  const onChange = (event) => {
    change({ [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Submit');
  };

  console.log(state);

  return (
    <form onSubmit={onSubmit}>
      <P>Text Here</P>
      <Input
        onChange={onChange}
        name='firstName'
        type='text'
        value={state.firstName}
        placeholder='First Name'
      />
      <Input
        onChange={onChange}
        name='lastName'
        type='text'
        value={state.lastName}
        placeholder='Last Name'
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default UseReducerExample;
