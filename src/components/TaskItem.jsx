import { useState } from "react";
function TaskItem({ task }) {
  const [active, setActive] = useState(true)
  
  setActive(!active)
  active== false ? " ":""
  return (
    <div className="flex items-center gap-3 border-b p-3">
      <input type="checkbox"
       />

      <span>{task}</span>
    </div>
  );
}

export default TaskItem;