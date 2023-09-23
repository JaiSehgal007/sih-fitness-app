import ProfileCard from "./ProfileCard"
import ActivityCard from "./ActivityCard"
import LevelInfo from './LevelInfo'
import '../index.css'

export const ProfileComponent = () => {
  return (
    <div className="profileComponent">
      {/* <div> */}
        <ProfileCard />
        <ActivityCard />
      {/* </div> */}
        <LevelInfo />
    </div>
  )
}
