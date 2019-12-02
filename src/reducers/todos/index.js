import { types } from '../../actions/todos';

const fetchSuccess = (state, { todos }) => ({
  ...state,
  error: null,
  todos: [ ...state.todos, ...todos ],
});

const fetchError = (state, { error }) => ({
  ...state,
  error,
});

const add = (state, { todo }) => ({
  ...state,
  todos: [ todo, ...state.todos ],
});

const remove = (state, { id }) => ({
  ...state,
  todos: state.todos.filter(todo => todo.id !== id),
});

const clear = (state) => ({
  ...state,
  todos: []
});

const TodoReducer = {
  [types.TODO_FETCH_SUCCESS]: fetchSuccess,
  [types.TODO_FETCH_ERROR]: fetchError,
  [types.TODO_ADD]: add,
  [types.TODO_REMOVE]: remove,
  [types.TODO_CLEAR]: clear
};

export { TodoReducer };
