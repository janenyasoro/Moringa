import { useState, useEffect } from 'react'
import './App.css'
import {format} from "date-fns"

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    //Updates time every second
    const timer = setInterval(() =>{
      setCurrentTime(new Date())
    }, 1000)

    //cleanup the interval when component umounts
    return() => clearInterval(timer)
  }, [])

  return(
    <div className='clock-container'>
    <div className='clock-card'>
    <h1 className='clock-title'> Current Time</h1>

    {/*Time Display*/}
    <p className='clock-time'>
      {format(currentTime, "hh:mm:ss a")}
    </p>

    {/*Date Display*/}
    <p className='clock-date'>
      {format(currentTime, "EEEE, MMMM do, yyyy")}
    </p>

    {/* Optional: Timezone or greeting */}
        <p className="clock-greeting">
          {format(currentTime, 'h:mm a') === '12:00 AM' && '🌙 Midnight'}
          {format(currentTime, 'h:mm a') === '12:00 PM' && '☀️ Noon'}
          {format(currentTime, 'HH') < 12 && format(currentTime, 'HH') >= 5 && '🌅 Good Morning'}
          {format(currentTime, 'HH') >= 12 && format(currentTime, 'HH') < 17 && '☀️ Good Afternoon'}
          {format(currentTime, 'HH') >= 17 && format(currentTime, 'HH') < 20 && '🌤️ Good Evening'}
          {format(currentTime, 'HH') >= 20 && '🌙 Good Night'}
        </p>
    </div>
    </div>
  )
}

export default App
