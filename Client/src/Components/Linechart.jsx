import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import PieChart from './Piechart';
import { useDataContext } from '../pages/DataProvider';

function Linechart() {
  const { data, updateData } = useDataContext();
  useEffect(() => {
    const labels = data.map(item => item.month);
    const quantities = data.map(item => item.quantity);

    const dataLine = {
      labels: labels,
      datasets: [{
        label: 'Quantity',
        data: quantities,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }],
    };

    const configLine = {
      type: 'line',
      data: dataLine,
      options: {
        scales: {
          xAxis: [
            {
              display: true,
              title: {
                display: true,
                text: 'Months',
              },
            },
          ],
        },
      },
    };


    const chartCanvas = document.getElementById('lineChart');
    const lineChart = new Chart(chartCanvas, configLine);

    return () => {
      lineChart.destroy();
    };
  }, [data]);


  return (
    <div className="flex flex-col sm:flex-row gap-3 p-2">
      <div className="card p-4 bg-white shadow-md rounded-md flex-grow">
        <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
        <canvas id="lineChart" className="w-full" height="100"></canvas>
      </div>
      <PieChart />
    </div>
  );
}

export default Linechart;
