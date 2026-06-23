function TaskInput() {
  return (
    <div className="flex gap-2 mb-5">
      <input
        type="text"
        placeholder="What's on your mind?"
        className="flex-1 border rounded-lg p-3"
      />

      <button className="bg-purple-600 text-white px-4 rounded-lg">
        +
      </button>
    </div>
  );
}

export default TaskInput;