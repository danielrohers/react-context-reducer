import React, { useEffect } from 'react';

import './index.css';

import { useStore } from '../../store';
import { fetchTodos, removeTodo } from '../../store/todos/actions';

import { Button } from '../Button';
import { ListItem } from '../ListItem';

export const List = () => {
  const { state, dispatch } = useStore();

  const _item = (todo) => (
    <ListItem key={todo.id} className="List-item">
      {todo.name}
      <Button onClick={() => dispatch(removeTodo(todo.id))}>x</Button>
    </ListItem>
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (state.error) {
    return (
      <div>
        <h2>Oooops...</h2>
        <p>{ state.error }</p>
      </div>
    )
  }

  return (
    <ul className="List">{ state.todos.map(_item) }</ul>
  )
}