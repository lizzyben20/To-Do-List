import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import FilterButton from "./components/FilterButton";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-xl pt-10">
        <Header />
        <TaskInput />
        <FilterButton />
        <TaskList />
      </div>
    </div>
  );
}

export default App;