'use client';
import StatusColumn from './components/status-column';
import { useTodoContext } from './context/TodoContext';

export default function Todo() {
  const { tasks } = useTodoContext();

  return (
    <main className="todo-section">
      <h1 className="todo-section__heading">ToDo List</h1>
      <div className="container">
        <div className="row todo-section__row">
          <div className="col-12 col-lg-4">
            <div className="todo-section__column">
              <StatusColumn
                type="todo"
                heading="To Do"
                color="red"
                tasks={tasks.filter((item) => item.status === 'todo')}
              />
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="todo-section__column">
              <StatusColumn
                heading="In Progress"
                color="yellow"
                tasks={tasks.filter((item) => item.status === 'in-progress')}
              />
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="todo-section__column">
              <StatusColumn
                heading="Done"
                color="green"
                tasks={tasks.filter((item) => item.status === 'done')}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
