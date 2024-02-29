import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import PieChart from './Piechart';

function Linechart() {
  useEffect(() => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40,60,50,20,10,50],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }],
    };

    const config = {
      type: 'line',
      data: data,
    };

    // Access the canvas element using useRef in a functional component
    const chartCanvas = document.getElementById('lineChart');
    const lineChart = new Chart(chartCanvas, config);

    // Cleanup chart on component unmount
    return () => {
      lineChart.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-3 p-2">
      <div className="card p-4 bg-white shadow-md rounded-md flex-grow">
        <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
        <canvas id="lineChart" className="w-full" height="300"></canvas>
      </div>
      <PieChart />
    </div>
  );
}

export default Linechart;
