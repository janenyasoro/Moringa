import { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([
    "Do shopping",
    "Do laundry",
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-80">
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-3 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="bg-gray-200 p-2 rounded">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;