// import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  LineElement,

Filler,
  PointElement,




} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
// import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  Filler

);

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bg_Color_1: string;
  bg_Color_2: string;
  label?: string[];
}
const months = ["January", "February", "March", "April", "May", "June"];

export const BarChart = ({
  horizontal = false,
  data_1,
  data_2,
  title_1,
  title_2,
  bg_Color_1,
  bg_Color_2,
  label = months,
}: BarChartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Revenue & Transactions",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels: label,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bg_Color_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bg_Color_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

interface DoughnutChartProps {
  data: number[];
  cutout?: number | string;
  backgroundColor: string[];
  labels: string[];
  legend?: boolean;
  offset?: number[];
}

export const DonutChart = ({
  data,
  cutout,
  backgroundColor,
  labels,
  legend = true,
  offset,
}: DoughnutChartProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
   labels,
   datasets:[   
   { data,
    backgroundColor, 
    borderWidth:0,
    offset

    }
]

  };
  const doughbutOptions: ChartOptions<"doughnut"> = {
    responsive:true,
    plugins:{
        legend:{
            display:legend,
            position:"bottom",
            labels:{
                padding:40
            }
            

        }
        
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={doughbutOptions} />;
};





interface PieChartProps {
  data: number[];

  backgroundColor: string[];
  labels: string[];
  
  offset?: number[];
}


export const PieChart = ({
  data,

  backgroundColor,
  labels,

  offset,
}: PieChartProps) => {
  const PieCharttData: ChartData<"pie", number[], string> = {
   labels,
   datasets:[   
   { data,
    backgroundColor, 
    borderWidth:1,
    offset

    }
]

  };
  const PieChartOptions: ChartOptions<"pie"> = {
    responsive:true,
    plugins:{
        legend:{
            
             display:false,
            

        }
        
    },
  
  };

  return <Pie data={PieCharttData} options={PieChartOptions} />;
};


// const months = moment.months()

interface LineChartProps {
  data: number[];
  label: string;
  backgroundColor: string;
  borderColor: string;
  labels?: string[];
}

export const LineChart = ({
  data,
  label,
  backgroundColor,
  borderColor,
  labels = months,
}: LineChartProps) => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const lineChartData: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data,
        backgroundColor,
        borderColor,
      },
    ],
  };

  return <Line options={options} data={lineChartData} />;
};