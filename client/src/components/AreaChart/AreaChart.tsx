import Chart from "react-apexcharts";

interface Chartprops {
  chartColor?: string;
}
const AreaChart = ({ chartColor }: Chartprops) => {
  const options = {
    chart: {
      height: 30,
      type: "area",
      toolbar: {
        show: false
      }
    },
    colors: [chartColor, "#fff"],
    fill: {
      type: "gradient",
      gradient: {
        shade: chartColor,
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: [chartColor, "#fff"],
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0],
        colorStops: []
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
      colors: [chartColor, "#fff"], // Set the initial color to be transparent
      gradient: {
        shade: "dark", // You can use 'dark' as well
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: [chartColor], // Change the color as needed
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [10]
      }
    },
    markers: {
      size: 0,
      colors: undefined,
      strokeColors: "#fff",
      strokeWidth: 6,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 10
      }
    },
    theme: {
      palette: false
    },
    dataLabels: {
      enabled: false
    },

    xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      crosshairs: {
        show: false
      },
      tooltip: {
        formatter: undefined
      },
      axisTicks: {
        show: false
      },
      lines: {
        show: false
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      crosshairs: {
        show: false
      },
      tooltip: {
        x: {
          formatter: undefined,
          show: false
        },
        y: {
          formatter: undefined
        },
        marker: {
          show: true
        }
      },
      lines: {
        show: false
      }
    },
    tooltip: {
      x: {
        formatter: undefined,
        show: false
      },
      y: {
        formatter: undefined,
        show: false
      },
      marker: {
        show: true
      }
    },
    grid: {
      show: false
    }
  };
  const series = [
    {
      name: "series-1",
      data: [0, 10, 5, 5, 10, 35, 8]
    }
  ];
  return (
    <div id="chart">
      <Chart options={options as any} series={series} type="area" height={100} />
    </div>
  );
};

export default AreaChart;
