import Cards from './UtilityComponents/Cards'
import situps from '../assets/workouts/situps.png'
import lunges from '../assets/workouts/lunges.png'
import crunches from '../assets/workouts/crunches.png'
import pushups from '../assets/workouts/pushups.png'

const Workouts = () => {
    const data = [
        {
          label: "Push Ups",
          url: pushups
        },
        {
          label: "Lunges",
          url: lunges
        },
        {
          label: "Sit Ups",
          url: situps
        },
        {
            label: "Crunches",
            url: crunches
        },
        {
            label: "Push Ups",
            url: pushups
        },
        {
            label: "Lunges",
            url: lunges
        },
        {
            label: "Sit Ups",
            url: situps
        },
        {
          label: "Crunches",
          url: crunches
        }
      ];
  return (
    <div className='routines'>
        <div className='routinesText'>Explore More Workouts</div>
        <Cards data={data} />
    </div>
  )
}

export default Workouts