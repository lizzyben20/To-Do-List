function TaskItem({ task }) {
  return (
    <div className="group flex items-center justify-between p-3 border-b hover:bg-purple-50 transition-all duration-200">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-4 h-4 accent-purple-600"
        />

        <span>{task.text}</span>

        <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600">
          {task.category}
        </span>
      </div>

      <button className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 hover:scale-110 transition-all duration-200">
      </button>
    </div>
  );
}

export default TaskItem;