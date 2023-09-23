import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto'
import './Utility.css'

const data = {
    labels: ['Calories Burned'],
    datasets: [
        {
            label: 'Calories Burned',
            data: [20,50],
            borderColor: ['transparent'],
            backgroundColor: ['#434343' , '#A13951'],
            borderWidth: 1,
            hoverBorderWidth: 2,
            pointBackgroundColor: '#000000'
        }
    ]
}

const options = {
    elements: {
      arc: {
        roundedCornersFor: 1000,
      },
      center: {
        maxText: '100%',
        text: '67%',
        fontColor: '#FF6684',
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontStyle: 'normal',
        minFontSize: 1,
        maxFontSize: 256,
      },
      cutoutPercentage: 78,
    }
  };

const DonutChart = () => {
    return(
      <div className="chart-container">
          <Doughnut data={data} options={options}/>
      </div>
    )
}

export default DonutChart