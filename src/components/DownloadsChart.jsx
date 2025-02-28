import React from 'react';
import '../styles/DownloadsChart.css';
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

const DownloadsChart = () => {
  const labels = Array.from({ length: 24 }, (_, i) => i);
  
  const data = {
    labels,
    datasets: [
      {
        fill: false,
        data: [
          40, 60, 50, 35, 20, 45, 70, 65, 55, 60, 70, 75, 
          65, 60, 50, 45, 30, 20, 30, 40, 50, 60, 70, 80
        ],
        borderColor: '#4e83fb',
        backgroundColor: 'rgba(78, 131, 251, 0.1)',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 3
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
        enabled: true,
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        displayColors: false,
        callbacks: {
          title: () => '',
          label: (context) => `Downloads: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        min: 0,
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="download-chart-card">
      <div className="download-chart-header">
        <span className="download-chart-icon">📊</span>
        <span className="download-chart-title">LASTEST DOWNLOAD</span>
      </div>
      <div className="download-chart-content">
        <Line options={options} data={data} height={180} />
      </div>
    </div>
  );
};

export default DownloadsChart;