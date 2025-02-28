import React from 'react';
import '../styles/StatCard.css';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const StatCard = ({ title, value, subValue, change, positive }) => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  
  // Generate appropriate data based on whether the trend is positive or negative
  const getData = () => {
    if (positive) {
      return [65, 59, 40, 50, 45, 35, 75];
    } else {
      return [65, 75, 60, 80, 55, 70, 30];
    }
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: getData(),
        borderColor: positive ? '#4ade80' : '#ef4444',
        backgroundColor: positive ? 'rgba(74, 222, 128, 0.1)' : 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="stat-card">
      <div className="stat-info">
        <span className="stat-title">{title}</span>
        <div className="stat-value-container">
          <h2 className="stat-value">{value}</h2>
          <p className="stat-sub-value">{subValue}</p>
        </div>
        <p className={`stat-change ${positive ? 'positive' : 'negative'}`}>
          {change}
        </p>
      </div>
      <div className="stat-chart">
        <Line options={options} data={data} height={80} />
      </div>
    </div>
  );
};

export default StatCard;