import { useCallback, useReducer } from 'react';
import TextInput from './TextInput';

const initialState = {
  firstName: '',
  lastName: '',
};

const reducer = (prevState, action) => ({
  ...prevState,
  [action.name]: action.value,
});

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = useCallback((event) => {
    const { value, name } = event.target;
    dispatch({ value, name });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <TextInput name='firstName' value={state.firstName} onChange={onChange} />
      <TextInput name='lastName' value={state.lastName} onChange={onChange} />
    </form>
  );
};

export default ReducerExample;
