import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import FilterButtons from "./components/FilterButton";
import TaskList from "./components/TaskList";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <Header />
        <TaskInput />
        <FilterButtons
          filter={filter}
          setFilter={setFilter}
        />
        <TaskList />
      </div>
    </div>
  );
}

export default App;