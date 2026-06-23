import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = [
    {id:1, task:"Read for 1hr"},
    {id:2, task:"Read 10 pages"},
    {id:3, task:"Water plants"},
    {id:4, task:"Plan vacation"},
    {id:5, task:"Clean garage"}
  ];

  return (
    <div className="bg-white border rounded-lg">
      {tasks.map((task, id) => (
        <TaskItem
          key={task.id}
          task={task.task}
        />
      ))}
    </div>
  );
}

export default TaskList;