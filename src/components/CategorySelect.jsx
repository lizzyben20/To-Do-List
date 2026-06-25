function CategorySelect() {
  return (
    <select className="border rounded-lg px-3 py-3  text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200">
      <option className="text-gray-200" disabled selected value="">
        Category
      </option>
      <option>School</option>
      <option>Work</option>
      <option>Personal</option>
    </select>
  );
}

export default CategorySelect;