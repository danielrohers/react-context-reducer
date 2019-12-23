import { types } from './types';

import { getAll } from '../../api/todoAPI';

export const fetchSuccess = (todos) => ({ type: types.TODO_FETCH_SUCCESS, todos });

export const fetchError = (error) => ({ type: types.TODO_FETCH_ERROR, error });

export const fetchTodos = () => async (dispatch) => {
  try {
    const { results } = await getAll();
    dispatch(fetchSuccess(results));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const addTodo = (todo) => ({ type: types.TODO_ADD, todo });

export const removeTodo = (id) => ({ type: types.TODO_REMOVE, id });

export const clearTodo = () => ({ type: types.TODO_CLEAR });
