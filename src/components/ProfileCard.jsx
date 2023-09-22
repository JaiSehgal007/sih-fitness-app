import profile from '../assets/profile.png'
import arrow from '../assets/arrow.svg'
import arrowStartWorkout from '../assets/arrowStartWorkout.svg'
import dumbellImg3d from '../assets/dumbellImage3d.png'

const ProfileCard = () => {
  return (
    <div className='profileCard'>

        <div className='profileInfo'>
            <div>
                <img src={profile} alt='profile-pic' className='profileCardImage'/>
            </div>
            <div className='profileCardText'>
                <div className='profileName'>
                    <span>Shyam</span>
                </div>
                <div className='profileUpdate'>
                    <span>Update Profile <img className='arrow' src={arrow} alt="arrow" /></span>
                </div>
            </div>
        </div>

        <div className='exerciseCard'>
            <div className='exerciseDiv'>
                <div className='exerciseCTA'>
                    <div className='gymDay'>
                        <span>Gym Day</span>
                    </div>
                    <button className='startWorkout'>
                        <span>start workout <img className='arrowStartWorkout' src={arrowStartWorkout} alt="start-workout-arrow" /></span>
                    </button>
                </div>
                
                <div>
                    <img src={dumbellImg3d} alt='Dumbell Img' className='dumbellImage3D' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProfileCard