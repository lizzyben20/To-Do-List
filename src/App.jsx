import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import FilterButton from "./components/FilterButton";
import TaskList from "./components/TaskList";





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
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-xl pt-10">
        <Header />
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