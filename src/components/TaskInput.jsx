import CategorySelect from "../CategorySelect"

function TaskInput() {
  return (
    <div className="flex gap-2 mb-5">
      <input
        type="text"
        placeholder="What's on your mind?"
        className="flex-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
      />

      <CategorySelect />

      <button className="bg-purple-600 text-white px-4 rounded-lg hover:bg-purple-700 hover:scale-105 active:scale-95 transition-all duration-200">
        +
      </button>
    </div>
  );
}

export default TaskInput;