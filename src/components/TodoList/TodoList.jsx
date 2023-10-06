import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: '청소하기', status: 'active' },
    { id: '2', text: '운동하기', status: 'active' },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (update) =>
    setTodos(todos.map((i) => (i.id === update.id ? update : i)));
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item} onUpdate={handleUpdate} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
