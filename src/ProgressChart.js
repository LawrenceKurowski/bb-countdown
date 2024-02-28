import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import {chartData} from './ChartData.js'
import './index.css';
Chart.register(ArcElement);


const ProgressChart = ({progress}) => {
  return (
    <div>
      <Pie data={chartData({progress})} />
    </div>
  );
};

export default ProgressChart;