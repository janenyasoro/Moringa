import { useState } from 'react'
import './App.css'
import Todo from './components/ToDo'  // Note: Make sure filename matches (Todo.jsx vs ToDo.jsx)

function App() {
  return(
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <Todo /> 
      </div> 
  );
}

export default App;