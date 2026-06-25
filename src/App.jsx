import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import FilterButtons from "./components/FilterButton";
import TaskList from "./components/TaskList";

function App() {
  const [filter, setFilter] = useState("all");





function App() {
  const [tasks, setTasks] = useState([
      {id: Date.now() + Math.random(), task: "Read for 1hr" , completed: false},
      {id: Date.now() + Math.random(), task: "Read 10 pages", completed: false},
      {id: Date.now() + Math.random(), task: "Water plants", completed: false},
      {id: Date.now() + Math.random(), task: "Plan vacation", completed: false},
      {id: Date.now() + Math.random(), task: "Clean garage", completed: false}
  ]);

  function newTask(texts) {
    const newTask = {
      id: Date.now() + Math.random(),
      task: texts,
      completed: false
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    
  }
  console.log(tasks)
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <Header />
        <TaskInput />
        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />
        <TaskList />
        <TaskInput onAddTask={newTask} />
        <FilterButton />
        <TaskList tasks={tasks} />
        {/* <TaskInput onAddTask={addTask} />

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
        /> */}
      </div>
    </div>
  );
}

export default App;