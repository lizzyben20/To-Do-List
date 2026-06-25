function FilterButtons({ filter, setFilter }) {
  const btnStyle = (name) =>
    `flex-1 py-2 rounded-lg transition-all duration-200 ${
      filter === name
        ? "bg-purple-600 text-white scale-105"
        : "bg-white border text-gray-600 hover:bg-purple-50"
    }`;

  return (
    <div className="flex gap-2 mb-5">
      <button
        className={btnStyle("all")}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={btnStyle("active")}
        onClick={() => setFilter("active")}
      >
        Active
      </button>

      <button
        className={btnStyle("completed")}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;