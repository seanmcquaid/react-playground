import { useMemo, useReducer } from 'react';
import styled from 'styled-components';
import axios from '../../../../node_modules/axios/index';
import Form from './Form';
import Jobs from './Jobs';

const initialState = {
  response: [],
  isLoading: false,
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
        isLoading: false,
        response: action.payload.data,
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const Optimized = () => {
  const [{ response, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const jobs = useMemo(() => response, [response]);

  const onSubmit = ({ description, fullTime, location }) => {
    dispatch({ type: 'LOADING' });

    axios
      .get(
        `http://localhost:8080/https://jobs.github.com/positions.json?description=${description}&full_time=${fullTime}&location=${location}`
      )
      .then(({ data }) => {
        dispatch({
          type: 'SUCCESS',
          payload: { data },
        });
      })
      .catch((error) => {
        dispatch({
          type: 'SUCCESS',
          payload: { error },
        });
      });
  };

  return (
    <PageContainer>
      <Header>
        <H1>Job Search</H1>
      </Header>
      <Main>
        <Form onSubmit={onSubmit} />
        {isLoading ? <Loading>LOADING</Loading> : <Jobs jobs={jobs} />}
      </Main>
    </PageContainer>
  );
};

export default Optimized;

const PageContainer = styled.div``;

const Header = styled.header``;

const H1 = styled.h1``;

const Main = styled.main``;

const Loading = styled.div``;
