function CategorySelect() {
  return (
    <select className="border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200">
      <option>School</option>
      <option>Work</option>
      <option>Personal</option>
    </select>
  );
}

export default CategorySelect;