import DonutChart from './UtilityComponents/DonutChart'
import SelectDropDown from './UtilityComponents/SelectDropDown'
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ActivityCard = () => {
  const [auth, setAuth] = useAuth();
  console.log(" user auth", auth);
  const [levels, setLevels] = useState([]);
  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/muscle/get-muscle-data`,
        );
        console.log("levels", response.data);
        setLevels(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if(auth){

      fetchLevels();
    }

  },[auth]);
  return (
    <div className='activityCard'>

        <div className='activityInfo'>
                <div className='activityHeading'>
                    <span>Statistics</span>
                </div>
                <SelectDropDown />
        </div>

        <div 
        >
                <DonutChart />
                {/* {
                  levels.length ? levels.map((level) => {
                    return (
                       <div>
                       <p> {level.muscle_id.name} : {level.value}</p>
                       </div>
                    )
                  })
                  : 
                  <div
                  className='p-11'
                  >
                    <p> Fetching Statistics...</p>
                  </div>
                } */}
        </div>

    </div>
  )
}

export default ActivityCard