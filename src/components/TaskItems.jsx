function TaskItem({ task, toggleTask }) {
  return (
    <div
      className={`task-item${task.completed ? " completed" : ""}`}
      onClick={() => toggleTask(task.id)}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <div className="task-details">
        <strong>{task.title}</strong>
        <span>{task.description}</span>
      </div>
    </div>
  );
}

export default TaskItem;
