
   function Header({tasks}) {
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold text-purple-600">
         My Tasks
      </h1>

      <p className="text-gray-500">
        Stay organized, stay productive
      </p>

      <p className="text-sm text-gray-400 mt-1">
        {tasks.filter((task) => !task.completed).length} Tasks Remaining
      </p>
    </div>
  );
}

export default Header;