import { useCallback, useEffect, useState } from 'react';
import axios from '../../../node_modules/axios/index';

const Optimized = () => {
  const [state, setState] = useState({
    description: '',
    fullTime: false,
    location: '',
  });

  const onChange = useCallback(() => {}, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/https://jobs.github.com/positions.json?description=python&full_time=true&location=sf`
      )
      .then(({ data }) => {
        console.log(data);
      });
  }, []);

  return <div></div>;
};

export default Optimized;
