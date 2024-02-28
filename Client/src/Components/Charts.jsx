import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function Charts() {
  useEffect(() => {
    const dataPie = {
      labels: ["JavaScript", "Python", "Ruby"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(133, 105, 241)",
            "rgb(164, 101, 241)",
            "rgb(101, 143, 241)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
      options: {},
    };

    // Access the canvas element using useRef in a functional component
    const chartPieCanvas = document.getElementById("chartPie");
    const chartPie = new Chart(chartPieCanvas, configPie);

    // Cleanup chart on component unmount
    return () => {
      chartPie.destroy();
    };
  }, []);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="py-3 px-5 bg-gray-50">Pie chart</div>
      <canvas className="p-1 ml-40 mr-40" id="chartPie"></canvas>
    </div>
  );
}

export default Charts;
