import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const ProgressChart = ({ progress }) => {
  // Calculate remaining time as a percentage
  const remainingPercentage = Math.max(0, 100 - progress);

  // Define data for the pie chart
  const data = {
    datasets: [{
      data: [progress, remainingPercentage],
      backgroundColor: ['#36A2EB', '#FFCE56'], // Colors for the chart slices
    }],
  };

  return (
    <div>
      <h2>Progress Chart</h2>
      <Pie data={data} />
    </div>
  );
};

export default ProgressChart;