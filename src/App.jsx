import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import FilterButtons from "./components/FilterButton";
import TaskList from "./components/TaskList";

function App() {
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState([
    { id: Date.now() + Math.random(), task: "Read for 1hr", completed: false },
    { id: Date.now() + Math.random(), task: "Read 10 pages", completed: false },
    { id: Date.now() + Math.random(), task: "Water plants", completed: false },
    { id: Date.now() + Math.random(), task: "Plan vacation", completed: false },
    { id: Date.now() + Math.random(), task: "Clean garage", completed: false },
  ]);

  function newTask(texts) {
    const task = {
      id: Date.now() + Math.random(),
      task: texts,
      completed: false,
    };

    setTasks((prevTasks) => [task, ...prevTasks]);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <Header />

        <TaskInput onAddTask={newTask} />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;