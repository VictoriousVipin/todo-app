'use client';

import React from 'react';
import TaskCard from './task-card';
import Dialog from '../common/dialog';
import CreateTaskForm from './create-task-form';
import { useTodoContext } from '../context/TodoContext';

export default function StatusColumn({ type, heading, color, tasks }) {
  const { showDialog, setShowDialog } = useTodoContext();

  return (
    <div className="status-column">
      <h2 className={`status-column__heading ${color}`}>{heading}</h2>
      <ul className="status-column__tasklist">
        {Array.isArray(tasks) &&
          tasks.map((task) => (
            <li key={task.id} className="status-column__tasklist-item">
              <TaskCard task={task} />
            </li>
          ))}
      </ul>
      {type == 'todo' && (
        <>
          <div className="status-column__create-btn">
            <button onClick={() => setShowDialog(true)}>+</button>
          </div>
          {showDialog && (
            <Dialog closePortal={() => setShowDialog(false)}>
              <CreateTaskForm />
            </Dialog>
          )}
        </>
      )}
    </div>
  );
}
