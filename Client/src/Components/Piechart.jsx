import { useEffect } from "react";
import Chart from 'chart.js/auto';

function PieChart() {
  useEffect(() => {
    const dataPie = {
      labels: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100, 150, 200, 250, 50, 75, 125, 175, 225, 275],
          backgroundColor: [
            "rgb(133, 105, 241)", "rgb(164, 101, 241)", "rgb(101, 143, 241)",
            "rgb(75, 192, 192)", "rgb(255, 99, 132)", "rgb(255, 205, 86)",
            "rgb(54, 162, 235)", "rgb(255, 159, 64)", "rgb(255, 69, 0)",
            "rgb(0, 255, 0)", "rgb(255, 0, 0)", "rgb(128, 128, 128)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 15,
            },
          },
        },
      },
    };

    const chartPieCanvas = document.getElementById("pieChart");
    const pieChart = new Chart(chartPieCanvas, configPie);

    return () => {
      pieChart.destroy();
    };
  }, []);

  return (
    <div className="card p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
      <canvas id="pieChart" width="300" height="200"></canvas>
    </div>
  );
}

export default PieChart;
