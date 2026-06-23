import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import FilterButton from "./components/FilterButton";
import TaskList from "./components/TaskList";

const FILTERS = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

function App() {
  const [tasks, setTasks] = useState([
    { id: crypto.randomUUID(), text: "Read for 1hr", completed: false },
    { id: crypto.randomUUID(), text: "Read 10 pages", completed: false },
    { id: crypto.randomUUID(), text: "Water plants", completed: false },
    { id: crypto.randomUUID(), text: "Plan vacation", completed: false },
    { id: crypto.randomUUID(), text: "Clean garage", completed: false },
  ]);
  const [filter, setFilter] = useState("All");

  const visibleTasks = tasks.filter(FILTERS[filter]);

  function addTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-xl pt-10">
        <Header />
        <TaskInput onAddTask={addTask} />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <FilterButton activeFilter={filter} setFilter={setFilter} />
          <div className="text-sm text-gray-500">
            Showing {visibleTasks.length} of {tasks.length} tasks
          </div>
        </div>

        <TaskList
          tasks={visibleTasks}
          onToggleComplete={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;