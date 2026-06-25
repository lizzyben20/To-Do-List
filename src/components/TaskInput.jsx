import CategorySelect from "../CategorySelect"

function TaskInput() {
import { useState } from "react";

function TaskInput({onAddTask}) {
  const [task, setTask] = useState("");

  function TaskHandle(e) {
    e.preventDefault();
    if(!task.trim()) return;

    onAddTask(task);
    setTask("");
  }
  return (
    <div className="flex gap-2 mb-5">
      <input
      value={task}
      onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="What's on your mind?"
        className="flex-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
      />

      <CategorySelect />

      <button className="bg-purple-600 text-white px-4 rounded-lg hover:bg-purple-700 hover:scale-105 active:scale-95 transition-all duration-200">
        className="flex-1 border rounded-lg p-3"
    
      />

      <button className="bg-purple-600 text-white px-4 rounded-lg" 
      onClick={TaskHandle}>
        +
      </button>
    </div>
  );
}

export default TaskInput;