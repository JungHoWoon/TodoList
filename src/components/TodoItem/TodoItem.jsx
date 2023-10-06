import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li key={id}>
      <input
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}
