import { useState } from 'react'
import './App.css'
import Todo from './components/ToDo'  // Note: Make sure filename matches (Todo.jsx vs ToDo.jsx)

function App() {
  return(
    <div className='App'>
      <Todo />  {/* ✅ ADD THIS - now your Todo component will render */}
    </div>
  )
}

export default App;