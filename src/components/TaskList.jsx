import TaskItem from "./TaskItem";


function TaskList({ tasks,onToggleTask }) {
  return (
    <div className="bg-white text-gray-800 border rounded-lg">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
        />
      ))}
    </div>
  );
}

export default TaskList;