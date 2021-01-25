import { useEffect, useState } from 'react';
import axios from '../../../../node_modules/axios/index';

const BatchingSetState = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
      )
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <ul>
      <li>isLoading : {isLoading}</li>
      <li>Error : {error} </li>
      {data.map((jobInfo) => (
        <li key={jobInfo.id}>{JSON.stringify(jobInfo)}</li>
      ))}
    </ul>
  );
};

export default BatchingSetState;
