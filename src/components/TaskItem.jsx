import { useState } from "react";
function TaskItem({ task }) {
  const [active, setActive] = useState(false);
  
  return (
    <div className="flex items-center gap-3 border-b p-3">


      <span onClick={() => setActive(!active)}
        className={` ${active ? "line-through text-gray-500" : "text-gray-800"} flex items-center gap-2 cursor-pointer`}
        >
                <input type="checkbox"
       /> 
        {task}
      </span>
    </div>
  );
}

export default TaskItem;