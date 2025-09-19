function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className={`task-item${task.completed ? " completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <div className="task-details">
        <strong>{task.title}</strong>
        <span>{task.description}</span>
      </div>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
        title="Delete task"
      >
        &times;
      </button>
    </div>
  );
}

export default TaskItem;
