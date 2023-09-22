import avatar from '../assets/avatar.png'
import level from '../assets/level.png'
import ThirtyDayStreak from '../assets/30DayStreak.png'
import FirstWorkout from '../assets/firstWorkout.png'
import HundredWorkout from '../assets/100Workout.png'

const LevelInfo = () => {
  return (
    <div className='levelInfoCard'>

        <div className='avatarInfo'>
            <img src={avatar} 
                alt='game-avatar'
                className='avatarImage'
            />
        </div>

        <div className='levelAndBadges'>
            <div className='levelDetails'>
                <div>
                    <img src={level} alt='medal-img' className='levelImg'/>
                </div>
                <span>
                    Level 11
                </span>
            </div>

            <div className='badges'>
                <img src={HundredWorkout}  alt="100-day-workout" className='badgeImg'/>
                <img src={ThirtyDayStreak} className='badgeImg' alt="30-day-workout" />
                <img src={FirstWorkout} className='badgeImg' alt="first-workout" />
            </div>
        </div>

    </div>
  )
}

export default LevelInfo