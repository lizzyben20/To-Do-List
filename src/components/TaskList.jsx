import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div className="bg-white text-gray-800 border rounded-lg">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task.task}
        />
      ))}
    </div>
  );
}

export default TaskList;