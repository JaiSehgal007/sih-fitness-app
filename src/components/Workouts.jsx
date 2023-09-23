import Cards from './UtilityComponents/Cards'
import situps from '../assets/workouts/situps.png'
import lunges from '../assets/workouts/lunges.png'
import crunches from '../assets/workouts/crunches.png'
import pushups from '../assets/workouts/pushups.png'

const Workouts = () => {
    const data = [
        {
          label: "Bicep Curls",
          url: "https://i.ytimg.com/vi/in7PaeYlhrM/maxresdefault.jpg",
          link: '/train/bicepCurls'
        },
        {
          label: "Push Ups",
          url: pushups,
          link: '/main'
        },
        {
          label: "Lunges",
          url: lunges,
          link: '/main'
        },
        {
          label: "Sit Ups",
          url: situps,
          link: '/main'
        },
        {
            label: "Crunches",
            url: crunches,
            link: '/main'
        },
        {
            label: "Lunges",
            url: lunges,
            link: '/main'
        },
        {
            label: "Sit Ups",
            url: situps,
            link: '/main'
        },
        {
          label: "Crunches",
          url: crunches,
          link: '/main'
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