import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
// import { Tooltip } from 'react-tooltip'; 

const getColorClass = (count) => {
  if (count < 500) {
    return 'color-less-than-500';
  } else if (count < 1000) {
    return 'color-less-than-1000';
  } else if (count < 1500) {
    return 'color-less-than-1500';
  } else if (count <= 2000) {
    return 'color-less-than-2000';
  } else {
    return 'color-zero';
  }
};

// const generateTooltipContent = (value) => {
//   if (!value) {
//     return 'No data for this date';
//   }
//   return `Date: ${value.date}\nCount: ${value.count}`;
// };

const CalendarMap = () => {
  return (
    <>
      <CalendarHeatmap
        startDate={new Date('2023-01-01')}
        endDate={new Date('2023-12-01')}
        values={[
          { date: '2022-12-01', count: 1 },
          { date: '2023-01-03', count: 400 },
          { date: '2023-01-09', count: 900 },
          { date: '2023-09-09', count: 1500 },
          { date: '2023-09-10', count: 2000 },
        ]}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return getColorClass(value.count);
        }}
        // tooltipDataAttrs={(value) => {
        //   return {
        //     'data-tip': generateTooltipContent(value),
        //     'data-place': 'top',
        //   };
        // }}
      />
    </>
  );
};

const Calendar = () => {
  return(
    <div className='calendar'>

      <div className='calendarText'>
        <div className='calendarHeading'>
          Calories Burned
        </div>
        <div className='thisYear'>
          This year
        </div>
      </div>

      <div className='calendarHeatMap'>
        <CalendarMap />
      </div>
    </div>
  )
}

export default Calendar;