import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li key={id} className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <button onClick={handleDelete} className={styles.button}>
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}
