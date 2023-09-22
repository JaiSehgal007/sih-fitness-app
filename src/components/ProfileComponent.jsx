import ProfileCard from "./ProfileCard"
import ActivityCard from "./ActivityCard"
import LevelInfo from './LevelInfo'

export const ProfileComponent = () => {
  return (
    <div className="profileComponent">
        <ProfileCard />
        <ActivityCard />
        <LevelInfo />
    </div>
  )
}
