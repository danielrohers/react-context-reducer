/* eslint-disable no-empty-pattern */
import React from 'react';

import { useStore } from '../../store';
import { addTodo, clearTodo } from '../../store/todos/actions';

import { Input } from '../Input';
import { Button } from '../Button';

export const Form = () => {
  const { dispatch } = useStore();

  function _onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    dispatch(addTodo({ id: Date.now(), title: form.title.value }));
    form.reset();
  }

  function _clear() {
    dispatch(clearTodo());
  }

  return (
    <form onSubmit={_onSubmit}>
      <Input required name="title" />
      <Button type="button" onClick={_clear}>Clear</Button>
    </form>

  )
}