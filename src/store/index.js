import React, { createContext, useContext, useReducer } from 'react';

import reducers from '../reducers';
import { TodoStore } from './todos';

const initialState = {
  ...TodoStore
};

export const StateContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducers, initialState)}>{ children }</StateContext.Provider>
  );
}

export const useStore = () => useContext(StateContext);
