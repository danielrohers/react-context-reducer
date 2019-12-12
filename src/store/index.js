import React, { createContext, useContext, useReducer, useCallback } from 'react';

import reducers from '../reducers';
import { TodoStore } from './todos';

const initialState = {
  ...TodoStore
};

export const StateContext = createContext(initialState);

const asyncer = (dispatch, state) => action => typeof action === 'function'? action(dispatch, state) : dispatch(action);

export const StoreProvider = ({ children }) => {
  const [ state, dispatchBase ] = useReducer(reducers, initialState);
  const dispatch = useCallback(asyncer(dispatchBase, state), []);
  return (
    <StateContext.Provider value={{ state, dispatch }}>{ children }</StateContext.Provider>
  );
}

export const useStore = () => useContext(StateContext);
