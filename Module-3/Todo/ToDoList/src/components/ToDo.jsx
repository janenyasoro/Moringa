import { useState } from 'react'

function Todo() {
  // List of todos (starts with 2 items)
  const [todos, setTodos] = useState(['Do Shopping', 'Do Laundry'])
  
  // What user types in the box
  const [task, setTask] = useState('')

  // Add new todo
  function addTodo() {
    if (task.trim() !== '') {
      setTodos([...todos, task])
      setTask('') // Clear input
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Todo List
      </h1>
      
      {/* Input & Button Section */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          onClick={addTodo}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-400 transition-colors"
        >
          Add
        </button>
      </div>

      {/* The List */}
      {todos.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No tasks yet. Add one above!</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center p-3 bg-gray-50 rounded-lg"
            >
              <span className="orange">{todo}</span>
            </li>
          ))}
        </ul>
      )}
      
      {/* Task Counter */}
      {todos.length > 0 && (
        <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4">
          Total tasks: {todos.length}
        </div>
      )}
    </div>
  )
}

export default Todo