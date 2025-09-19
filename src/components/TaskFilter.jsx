function TaskFilter({ filter, setFilter }) {
  return (
    <div className="task-filter">
      {["All", "Pending", "Completed"].map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
