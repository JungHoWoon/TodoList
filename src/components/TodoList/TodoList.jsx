import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: '1', text: '청소하기', status: 'active' },
    { id: '2', text: '운동하기', status: 'active' },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (update) =>
    setTodos(todos.map((i) => (i.id === update.id ? update : i)));
  const handleDelete = (delet) =>
    setTodos(todos.filter((i) => i.id !== delet.id));

  const getFilteredItem = (todos, filter) => {
    if (filter === 'all') {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  };

  const filtered = getFilteredItem(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
