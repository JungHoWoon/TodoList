import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '1', text: '청소하기', status: 'active' },
    { id: '2', text: '운동하기', status: 'active' },
  ]);
  return (
    <section>
      <ul>
        {todos.map((list) => (
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
    </section>
  );
}
