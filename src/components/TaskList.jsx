import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = [
    { text: "Read for 1hr", category: "School" },
    { text: "Read 10 pages", category: "School" },
    { text: "Water plants", category: "Personal" },
    { text: "Plan vacation", category: "Personal" },
    { text: "Clean garage", category: "Work" },
  ];

  return (
    <div>
      <p className="text-sm text-gray-400 mb-3">
        0 of {tasks.length} completed
      </p>

      <div className="bg-white border rounded-lg overflow-hidden">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
          />
        ))}
      </div>
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