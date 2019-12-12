import { getAll } from '../api/todoAPI';

export const types = {
  TODO_FETCH: 'TODO_FETCH',
  TODO_FETCH_SUCCESS: 'TODO_FETCH_SUCCESS',
  TODO_FETCH_ERROR: 'TODO_FETCH_ERROR',
  TODO_ADD: 'TODO_ADD',
  TODO_REMOVE: 'TODO_REMOVE',
  TODO_CLEAR: 'TODO_CLEAR'
};

export const fetchSuccess = (todos) => ({ type: types.TODO_FETCH_SUCCESS, todos });

export const fetchError = (error) => ({ type: types.TODO_FETCH_ERROR, error });

export const fetchTodos = () => async (dispatch) => {
  try {
    const todos = await getAll();
    if (!Array.isArray(todos) && !todos.length) {
      dispatch(fetchError('Not found'));
      return;
    }
    dispatch(fetchSuccess(todos));
  } catch (error) {
    dispatch(fetchError);
  }
};

export const addTodo = (todo) => ({ type: types.TODO_ADD, todo });

export const removeTodo = (id) => ({ type: types.TODO_REMOVE, id });

export const clearTodo = () => ({ type: types.TODO_CLEAR });
