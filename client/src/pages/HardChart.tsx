import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Select from "react-select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novamber",
  "December",
];

const generateData = () => {
  var list = [];
  for (var i = 0; i <= 11; i++) {
    list.push(Math.random() * 20);
  }
  return list;
};

type Platform =
  | "Facebook"
  | "Instagram"
  | "Tiktok"
  | "Youtube"
  | "Twitter"
  | "Other"
  | "All";

const data = {
  labels,
  datasets: [
    {
      label: "Facebook",
      data: generateData(),
      borderColor: "#39BDF8",
      backgroundColor: "#39BDF8",
    },
    {
      label: "Twitter",
      data: generateData(),
      borderColor: "#FACC14",
      backgroundColor: "#FACC14",
    },
    {
      label: "Tiktok",
      data: generateData(),
      borderColor: "#FB923C",
      backgroundColor: "#FB923C",
    },
    {
      label: "Youtube",
      data: generateData(),
      borderColor: "#F97171",
      backgroundColor: "#F97171",
    },
    {
      label: "Instagram",
      data: generateData(),
      borderColor: "#C084FC",
      backgroundColor: "#C084FC",
    },
    {
      label: "Other",
      data: generateData(),
      borderColor: "#34D399",
      backgroundColor: "#34D399",
    },
  ],
};

export default function HardChart() {
  const [option, setOption] = useState<any>({ value: "All", label: "All" });
  const [chartData, setChartData] = useState(data.datasets);

  useEffect(() => {
    const value = option.value;
    if (value == "All") {
      setChartData([...data.datasets]);
    } else {
      const newData = data.datasets.filter((d) => d.label == value);
      setChartData([...newData]);
    }
  }, [option]);

  const selectOptions = [
    { value: "Facebook", label: "Facebook" },
    { value: "Instagram", label: "Instagram" },
    { value: "Twitter", label: "Twitter" },
    { value: "Youtube", label: "Youtube" },
    { value: "Tiktok", label: "Tiktok" },
    { value: "Other", label: "Other" },
    { value: "All", label: "All" },
  ];

  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? "#000" : "#667085",
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      background: "transparent",
      boxShadow: "none",
      color: "white",
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "#fff" }),
  };

  const onInputChange = (
    inputValue: string,
    { action, prevInputValue }: any
  ) => {
    console.log(inputValue);
  };
  return (
    <div>
      <div className=" w-48">
        <Select
          options={selectOptions}
          styles={customStyles}
          defaultValue={selectOptions[6]}
          onChange={(option) => setOption(option)}
        />
      </div>
      <Line
        options={options}
        data={{ labels, datasets: chartData }}
        style={{ height: 400 }}
      />
    </div>
  );
}
