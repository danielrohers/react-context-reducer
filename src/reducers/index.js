import { TodoReducer } from './todos';

const reducers = {
  ...TodoReducer
};

export default (state, action) => {
  if (!reducers.hasOwnProperty(action.type)) {
    return state;
  }

  return reducers[action.type](state, action);
};
