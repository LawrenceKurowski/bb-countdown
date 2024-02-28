// chartData.js
// use this to format etc the chart

export const chartData = ({progress})=>({
    datasets: [{
      data: [progress, 100-progress],
      backgroundColor: ['rgba(128, 128, 128, 0.5)', 'rgba(255, 192, 203, 0.5)'], // Colors for the chart slices
    }],
  });