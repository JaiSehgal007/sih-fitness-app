import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import { ProfileComponent } from './components/ProfileComponent'
import Routines from './components/Routines'
import Workouts from './components/Workouts'
import History from './components/History'
import './index.css'

function Combat() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='pageUnderConstruction'>
        <div>
          <p className='pageUnderConstructionHeading'>Combat Arena</p>
        </div>
       <div>
          <p className='pageUnderConstructionPage'>the page is under construction</p>
       </div>
    </div>
    </>
  )
}

export default Combat
