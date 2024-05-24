import { useTodoContext } from '../context/TodoContext';

export default function TaskCard({ task }) {
  const { removeTask, updateTaskStatus } = useTodoContext();
  return (
    <div className={`task-card task-card-${task.status}`}>
      <div className="task-card-details">
        <h3 className="task-card__heading">{task.title}</h3>
        <p className="task-card__description">{task.description}</p>
      </div>
      {task.status == 'done' ? (
        <span className="task-done-status">&#9989;</span>
      ) : (
        <input
          type="checkbox"
          className="task-card-action"
          onChange={() => updateTaskStatus(task.id)}
        />
      )}
      <button
        onClick={() => removeTask(task.id)}
        className="task-card-delete-btn"
      >
        &#10060;
      </button>
    </div>
  );
}
