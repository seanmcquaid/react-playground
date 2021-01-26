import { useState } from 'react';
import axios from '../../../node_modules/axios/index';

const NoPerformance = () => {
  const [state, setState] = useState({
    response: [],
    isLoading: false,
    error: null,
  });

  const onSubmit = ({ description, fullTime, location }) => {
    axios
      .get(
        `http://localhost:8080/https://jobs.github.com/positions.json?description=python&full_time=true&location=sf`
      )
      .then(({ data }) => {
        console.log(data);
      });
  };

  return <div></div>;
};

export default NoPerformance;
