import Cards from './UtilityComponents/Cards'
import cardio from '../assets/routines/cardio.png'
import fatBurn from '../assets/routines/fatBurn.png'
import health from '../assets/routines/health.png'
import strength from '../assets/routines/strength.png'
import './UtilityComponents/Utility.css'

const Routines = () => {
    const data = [
        {
          label: "Cardio Training",
          url: cardio
        },
        {
          label: "Fat Burning",
          url: fatBurn
        },
        {
          label: "Strength Training",
          url: strength
        },
        {
          label: "Health Fitness",
          url: health
        },
        {
            label: "Cardio Training",
            url: cardio
          },
          {
            label: "Fat Burning",
            url: fatBurn
          },
          {
            label: "Strength Training",
            url: strength
          },
          {
            label: "Health Fitness",
            url: health
          }
      ];
  return (
    <div className='routines'>
        <div className='routinesText'>Explore More Routines</div>
        <Cards data={data} />
    </div>
  )
}

export default Routines