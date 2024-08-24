

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { primaryColors } from "Theme/_muiPalette";

const ChartWrapper = styled(Chart)`
  .apexcharts-tooltip {
    background: ${primaryColors?.white};
    box-shadow: 0px 5.77983px 5.77983px rgba(50, 50, 71, 0.08),
      0px -1.44496px 11.5597px rgba(50, 50, 71, 0.06);
    padding: 20px;
    border-radius: 15px;
    .arrow_box {
      h6 {
   
        font-weight: 700;
        font-size: 16px;
        line-height: 1.5;
        color: ${primaryColors?.textPrimaryColor};
      }
      p {

        font-weight: 500;
        font-size: 10px;
        line-height: 1.5;
        color: #8590a5;
      }
    }
  }
`;

interface ChartProps {
  // seriesList?: any[];
  height?: string;
  maxOverallValue?: number | string;
}
export default function LineChartDashed({ height = "100%" }: ChartProps) {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    function generateRandomArray(length: number, min: number, max: number) {
      return Array.from(
        { length },
        () => Math.floor(Math.random() * (max - min + 1)) + min
      );
    }
    const fetchData = () => {
      const fetchedData = {
        series: [
          {
            name: "This Week Statistics",
            data: generateRandomArray(7, 0, 120)
          },
          {
            name: "This Week Statistics",
            data: generateRandomArray(7, 0, 120)
          }
        ],
        options: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false
            },
            toolbar: {
              show: false
            },
            dropShadow: {
              enabled: false,
              enabledOnSeries: undefined,
              top: 0,
              left: 10,
              blur: 11,
              color: "#D3CCDA",
              opacity: 1
            }
          },
          colors: ["#E9EDF1", primaryColors?.primary1],
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              shadeIntensity: 1,
              type: "vertical",
              opacityFrom: 1,
              opacityTo: 0,
              colorStops: [
                [
                  {
                    offset: 0,
                    color: "transparent",
                    opacity: 0
                  },
                  {
                    offset: 50,
                    color: "transparent",
                    opacity: 0
                  },

                  {
                    offset: 100,
                    color: "transparent",
                    opacity: 0
                  }
                ],
                [
                  {
                    offset: 0,
                    color: "transparent",
                    opacity: 1
                  },
                  {
                    offset: 50,
                    color: "transparent",
                    opacity: 0.75
                  },

                  {
                    offset: 100,
                    color: "transparent",
                    opacity: 0
                  }
                ]
              ]
            }
          },
          
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            width: 3,
            dashArray: [5, 0] // Apply dashed lines
          },
          title: {
            text: undefined,
            align: "left",
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '14px',
              fontWeight: "bold",
              fontFamily: undefined,
              color: "#263238"
            }
          },
          grid: {
            show: true,
            borderColor: "#EDEDED",
            strokeDashArray: 0,
            position: "back",
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
            row: {
              colors: undefined,
              opacity: 0.5
            },
            column: {
              colors: undefined,
              opacity: 0.5
            },
            padding: {
              top: 0,
              right: 0,
              bottom: 17,
              left: 17
            }
          },
          markers: {
            size: [0, 5],
            colors: ["transparent", primaryColors?.white],
            strokeColors: ["transparent", primaryColors?.primary1],
            strokeWidth: 2,
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
              size: 7,
              sizeOffset: 3
            }
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7],
            tooltip: {
              enabled: true,
              // formatter(val: number, opts: any) {
              //     return `${val}...`
              // },
              offsetY: 0,
              style: {
                fontSize: '14px',
      
              }
            },
            axisBorder: {
              show: false,
              color: "#EDEDED",
              offsetX: 0,
              offsetY: 0
            },
            axisTicks: {
              show: false,
              borderType: "solid",
              color: "#EDEDED",
              width: 6,
              offsetX: 0,
              offsetY: 0
            },
            labels: {
              show: true,

              style: {
                fontSize: '12px',
     
                fontWeight: 400,
                color: "#8590A5"
              },
              offsetX: 0,
              offsetY: 0,
              rotate: 0
              // formatter: (value: number) => value,
            }
          },
          yaxis: {
            show: true,
            showAlways: true,
            showForNullSeries: true,
            seriesName: undefined,
            opposite: false,
            reversed: false,
            logarithmic: false,
            logBase: 10,
            tickAmount: 4,
            min: 0,
            max: 200,
            forceNiceScale: false,
            floating: false,
            decimalsInFloat: undefined,
            labels: {
              show: true,
              align: "right",
              minWidth: 0,
              maxWidth: 160,
              style: {
                fontSize: '12px',
      
                fontWeight: 400,
                color: "#8590A5"
              },
              offsetX: 0,
              offsetY: 0,
              rotate: 0,
              formatter: (value: number) => `${value}`
            },
            axisBorder: {
              show: false,
              color: "#EDEDED",
              offsetX: 0,
              offsetY: 0,
   
            },
            axisTicks: {
              show: false,
              borderType: "solid",
              color: "#EDEDED",
              width: 6,
              offsetX: 0,
              offsetY: 0
            },
            title: {
              text: undefined,
              rotate: -90,
              offsetX: 0,
              offsetY: 0,
              style: {
                color: undefined,
                fontSize: '12px',
          
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-title"
              }
            },
            crosshairs: {
              show: false,
              position: "back",
              stroke: {
                color: "#b6b6b6",
                width: 1,
                dashArray: 0
              }
            },
            tooltip: {
              enabled: false,
              offsetX: 0
            }
          },
          tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: ({ series, seriesIndex, dataPointIndex }: any) => {
              return (
                `<div class="arrow_box">` +
                `<p>Total Order this week</p>` +
                `<h6>${series[seriesIndex][dataPointIndex]}</h6>` +
                `</div>`
              );
            },
            fillSeriesColor: false,
            theme: false,
            style: {
                fontSize: '12px',
              fontFamily: undefined
            },
            onDatasetHover: {
              highlightDataSeries: false
            },
            x: {
              show: false,
              // format: 'dd MMM',
              formatter: undefined
            },
            y: {
              show: false,
              formatter(value: number) {
                return `$${value}`;
              },
              title: {
                formatter: () => ""
              }
            },
            z: {
              show: false,
              formatter: undefined,
              title: "Lorem ipsum dolor sit"
            },
            marker: {
              show: false
            },
            items: {
              display: "flex"
            },
            fixed: {
              enabled: false,
              position: "topRight",
              fontSize: '12px',
              offsetY: 0
            }
          }
        }
      };
      setChartData(fetchedData as any);
    };

    fetchData();
  }, []);

  return (
    <ChartWrapper
      options={chartData ? chartData.options : {}} // Pass options only when chartData is available
      series={chartData ? chartData.series : []} // Pass series data only when chartData is available
      type="area"
      height={250}
      className="chart"
    />
  );
}
