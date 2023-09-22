// import { useState } from 'react'
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import { ProfileComponent } from './components/ProfileComponent'
import Routines from './components/Routines'
import Workouts from './components/Workouts'
import History from './components/History'
import './index.css'

function Main() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ProfileComponent />
      <Routines />
      <Workouts />
      <div className='historyAndCalendar'>
        <Calendar />
        <History />
      </div>
    </>
  )
}

export default Main
