import { useState } from 'react';
import styled from 'styled-components';
import axios from '../../../../node_modules/axios/index';
import Form from './Form';
import Jobs from './Jobs';

const NoPerformance = () => {
  const [{ response, isLoading, error }, setState] = useState({
    response: [],
    isLoading: false,
    error: null,
  });

  const onSubmit = ({ description, fullTime, location }) => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    axios
      .get(
        `http://localhost:8080/https://jobs.github.com/positions.json?description=${description}&full_time=${fullTime}&location=${location}`
      )
      .then(({ data }) => {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          response: data,
        }));
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          error,
        }));
      });
  };

  return (
    <PageContainer>
      <Header>
        <H1>Job Search</H1>
      </Header>
      <Main>
        <Form onSubmit={onSubmit} />
        {isLoading ? <div>LOADING</div> : <Jobs jobs={response} />}
      </Main>
    </PageContainer>
  );
};

export default NoPerformance;

const PageContainer = styled.div``;

const Header = styled.header``;

const H1 = styled.h1``;

const Main = styled.main``;
