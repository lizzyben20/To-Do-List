function TaskItem({ task }) {
  return (
    <div className="flex items-center gap-3 border-b p-3">
      <input type="checkbox" />

      <span>{task}</span>
    </div>
  );
}

export default TaskItem;