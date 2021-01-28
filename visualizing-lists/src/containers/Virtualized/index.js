import { useCallback, useEffect, useReducer } from 'react';
import { AutoSizer, List } from 'react-virtualized';
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

const Virtualized = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const row = state.data[index];

      return (
        <div key={key} style={style}>
          {row}
        </div>
      );
    },
    [state.data]
  );

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

  return (
    <AutoSizer>
      {({ width, height }) => (
        <List
          height={height}
          rowCount={state.data.length}
          rowHeight={30}
          rowRenderer={rowRenderer}
          width={width}
        />
      )}
    </AutoSizer>
  );
};

export default Virtualized;
