import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'], // Blue for visits data, lighter blue for percentage
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'line', // You might switch this to 'area' if you prefer filled areas instead of lines
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 190,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 225,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2, 4], // Line width for bars (0 width) and line series (4)
    curve: 'smooth', // Smooth curve for the line
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff', // White marker fill
    strokeColors: ['#3056D3', '#80CAEE'], // Stroke colors for markers
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    hover: {
      size: 6, // Size of marker when hovering
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', // Only 5 months for this example
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: [
    {
      title: {
        text: 'Visits Scheduled/Visits Completed',
        style: {
          fontSize: '14px',
        },
      },
      min: 0,
      max: 16,
    },
    {
      title: {
        text: 'Percentage Completed (%)',
        style: {
          fontSize: '14px',
        },
      },
      opposite: true, // Position the percentage axis on the right
      min: 0,
      max: 100,
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (val: number) {
        return val;
      },
    },
  },
};


interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Visits Scheduled',
        type: 'bar', // Bar chart for Visits Scheduled
        data: [12, 14, 10, 15, 13],
      },
      {
        name: 'Visits Completed',
        type: 'bar', // Bar chart for Visits Completed
        data: [10, 12, 8, 13, 11],
      },
      {
        name: 'Percentage Completed',
        type: 'line', // Line chart for Percentage Completed
        data: [83, 86, 80, 87, 85],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-6">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">No. of HCP Visits</p>
              <p className="text-sm font-medium">12.01.2024 - 12.05.2024</p>
            </div>
          </div>

        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Day
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Week
            </button>
            <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="line"
            height={225}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
