import { useEffect, useState } from 'react';
import axios from '../../../../node_modules/axios/index';

const SetStateObject = () => {
  const [state, setState] = useState({
    data: [],
    isLoading: false,
    error: null,
  });
  const { data, isLoading, error } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
      )
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          data,
        }));
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          error,
        }));
      });
  }, []);

  return (
    <ul>
      <li>isLoading : {isLoading ? 'true' : 'false'}</li>
      <li>Error : {error} </li>
      {data.map((jobInfo) => (
        <li key={jobInfo.id}>{JSON.stringify(jobInfo)}</li>
      ))}
    </ul>
  );
};

export default SetStateObject;
