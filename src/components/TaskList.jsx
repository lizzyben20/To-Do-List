import TaskItem from "./TaskItem";

function TaskList({tasks}) {
  return (
    <div className="bg-white text-gray-800 border rounded-lg">
      {tasks.map((tasking) => (
        <TaskItem
          key={tasking.id}
          task={tasking.task}
        />
      ))}     
    </div>
  );
}

export default TaskList;  