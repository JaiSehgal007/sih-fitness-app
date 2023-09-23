// import { useState, useEffect } from 'react'

const data = [
    {
        exercise: "11 pushups",
        calories: 1000,
        time: "06:00AM"
    },
    {
        exercise: "7 situps",
        calories: 1500,
        time: "Yesterday"
    },
    {
        exercise: "18 pushups",
        calories: 1600,
        time: "Yesterday"
    },
    {
        exercise: "17 crunches",
        calories: 1100,
        time: "Tuesday"
    }
]



const History = () => {

    // const [data, setData] = React.useState(dataArray)
    
    // useEffect(() => {

    //     axios.get(apiUrl, {
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       })
    //         .then((response) => {
    //           // Handle the response data here
    //           console.log('Daily Stats:', response.data.dailyStats);
    //         })
    //         .catch((error) => {
    //           // Handle any errors that occurred during the request
    //           console.error('Error:', error);
    //         });

    //     // return () => {
    //     //     cleanup
    //     // };
    // }, []);

  return (
    <div className='history'>
        <div className='historyIntro'>
            <div className='historyHeading'>History</div>
            <div className='viewAll'>
                ViewAll
            </div>
        </div>

        <div className="historyTable">
            {data.map((item, index) => (
            <div key={index} className="historyItem">
                <div className="historyExercise">{item.exercise}</div>
                <div className="historyCalories">{item.calories}</div>
                <div className="historyTime">{item.time}</div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default History