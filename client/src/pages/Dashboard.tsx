import React, { useState } from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  BarElement,
  LinearScale,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  LinearScale,
  Tooltip,
  Legend
);

const doughnutChartData = {
  data: {
    labels: ["Facebook", "YouTube", "TikTok", "Instagram", "Twitter", "Other"],
    datasets: [
      {
        label: "",
        data: [5, 6, 7, 20, 30, 10],
        backgroundColor: [
          "#f87171",
          "#38bdf8",
          "#fb923c",
          "#c084fc",
          "#facc15",
          "#34d399",
        ],
      },
    ],
  },
  options: {
    cutout: 80,
    layout: {
      autoPadding: false,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
          boxHeight: 15,
          font: {
            size: 16,
          },
        },
      },
    },
    datasets: {
      doughnut: {
        weight: 1,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  },
};

const arrowDown = (
  <FiArrowDown className="h-6 w-6 text-gray-200 group-hover:translate-y-1 duration-75" />
);
const arrowUp = (
  <FiArrowUp className="h-6 w-6 text-gray-200 group-hover:translate-y-1 duration-75" />
);

const Dashboard = () => {
  const [section1Open, setSection1Open] = useState(false);
  const [section2Open, setSection2Open] = useState(false);

  return (
    <div className="py-20 mx-auto container">
      <div className="flex gap-6">
        <div className="p-8 w-96 bg-dark-6 rounded-lg">
          <div className="text-xl font-semibold mb-8">Total Reach</div>
          {/* doughnut chart */}
          <Doughnut {...doughnutChartData} />
        </div>
        <div className="flex-1 space-y-6">
          <div className="p-8 bg-dark-6 rounded-lg">
            <div className="flex-between group">
              <div className="text-xl font-semibold">Yearly Progress</div>
              <button onClick={() => setSection1Open(!section1Open)}>
                {section1Open ? arrowUp : arrowDown}
              </button>
            </div>
            {section1Open && <div className="mt-6 text-gray-400">Content</div>}
          </div>
          <div className="p-8 bg-dark-6 rounded-lg">
            <div className="flex-between group">
              <div className="text-xl font-semibold">Revenue Per Reaches</div>
              <button onClick={() => setSection2Open(!section2Open)}>
                {section2Open ? arrowUp : arrowDown}
              </button>
            </div>
            {section2Open && <div className="mt-6 text-gray-400">Content</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
