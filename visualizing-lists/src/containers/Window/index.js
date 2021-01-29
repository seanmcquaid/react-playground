import { useCallback, useEffect, useReducer } from 'react';
import { VariableSizeList as List } from 'react-window';
import jokesService from '../../api/jokesService';

const initialState = {
  data: [],
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
        data: action.payload.data,
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

const Window = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOADING' });

    jokesService
      .getCategories()
      .then(({ data }) => {
        dispatch({ type: 'SUCCESS', payload: { data } });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', payload: { error } });
      });
  }, []);

  const Row = ({ index, style }) => <div style={style}>{state[index]}</div>;

  return (
    <List
      className='List'
      height={600}
      itemCount={state.data.length}
      itemSize={() => 35}
      width={300}
    >
      {Row}
    </List>
  );
};

export default Window;
