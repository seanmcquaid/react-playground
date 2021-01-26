import { useEffect, useReducer } from 'react';
import axios from '../../../../node_modules/axios/index';

const initialState = {
  isLoading: false,
  response: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        response: action.payload.data,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const UseReducerDataExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, response, error } = state;

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
      )
      .then(({ data }) => {
        dispatch({ type: 'SUCCESS', payload: { data } });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', payload: { error } });
      });
  }, []);

  return (
    <ul>
      <li>isLoading : {isLoading ? 'true' : 'false'}</li>
      <li>Error : {error} </li>
      {response.map((jobInfo) => (
        <li key={jobInfo.id}>{JSON.stringify(jobInfo)}</li>
      ))}
    </ul>
  );
};

export default UseReducerDataExample;
