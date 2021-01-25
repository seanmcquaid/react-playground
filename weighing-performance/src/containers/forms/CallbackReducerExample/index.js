import Button from 'components/Button';
import Input from 'components/Input';
import P from 'components/P';
import { useCallback, useReducer } from 'react';

const CallbackReducerExample = () => {
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

  const onChange = useCallback((event) => {
    change({ [event.target.name]: event.target.value });
  }, []);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    console.log('Submit');
  }, []);

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

export default CallbackReducerExample;
