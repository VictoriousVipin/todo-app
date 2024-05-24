'use client';
import React, { useState, useEffect, createContext, useContext } from 'react';

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const tasksData = localStorage.getItem('tasks');
    if (tasksData) {
      setTasks(JSON.parse(tasksData));
    }
  }, []);

  const addTask = ({ title, description }) => {
    const tasks = localStorage.getItem('tasks');
    if (!title.trim()) {
      setError('Please enter a title');
      return;
    } else if (!description.trim()) {
      setError('Please enter a description');
      return;
    }

    let tasksArr = [];
    if (tasks) {
      tasksArr = JSON.parse(tasks);
    }
    tasksArr.push({
      title,
      description,
      status: 'todo',
      id: new Date().getTime(),
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
    setTasks(tasksArr);
    setShowDialog(false);
  };

  const updateTaskStatus = (id) => {
    const tasks = localStorage.getItem('tasks');
    let tasksArr = [];
    if (tasks) {
      tasksArr = JSON.parse(tasks);
    }
    tasksArr = tasksArr.map((item) => {
      if (item.id === id) {
        item.status = item.status == 'todo' ? 'in-progress' : 'done';
      }

      return item;
    });
    localStorage.setItem('tasks', JSON.stringify(tasksArr));

    setTasks(tasksArr);
  };

  const removeTask = (id) => {
    const tasks = localStorage.getItem('tasks');
    let tasksArr = [];
    if (tasks) {
      tasksArr = JSON.parse(tasks);
    }
    tasksArr = tasksArr.filter((item) => item.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasksArr));

    setTasks(tasksArr);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        updateTaskStatus,
        removeTask,
        showDialog,
        setShowDialog,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
export default TodoContextProvider;
