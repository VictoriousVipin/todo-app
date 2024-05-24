'use client';
import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

export default function CreateTaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask, error } = useTodoContext();

  return (
    <div className="create-task-form">
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={() => addTask({ title, description })}>Add Task</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
