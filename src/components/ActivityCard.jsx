import DonutChart from './UtilityComponents/DonutChart'
import SelectDropDown from './UtilityComponents/SelectDropDown'

const ActivityCard = () => {
  return (
    <div className='activityCard'>

        <div className='activityInfo'>
                <div className='activityHeading'>
                    <span>Activity</span>
                </div>
                <SelectDropDown />
        </div>

        <div className='activityDonutChart'>
                <DonutChart />
        </div>

    </div>
  )
}

export default ActivityCard