import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import SearchBar from "./components/SearchBar";
import "./index.css";

const LOCAL_STORAGE_KEY = "tasks";

function App() {

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        description,
        completed: false,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "Pending") return !task.completed;
      if (filter === "Completed") return task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="container">
      <h1>My Tasks</h1>
      <p className="subtitle">Stay organized and productive.</p>
      <TaskForm addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <SearchBar search={search} setSearch={setSearch} />
      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
