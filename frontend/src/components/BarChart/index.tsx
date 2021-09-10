import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/saleSuccess';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesDateProps = {
  name: string;
  data: number[];
}

type ChartDataProps = {
  labels: {
    categories: string[];
  };
  series: SeriesDateProps[];

}

export function BarChart() {

  const [chartData, setChartData] = useState<ChartDataProps>({
    labels: {
      categories: []
    },
    series: [
          {
              name: "",
              data: []                   
          }
      ]
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`)
    .then((resp) => {
      const data = resp.data as SaleSuccess[];

      const myLabels = data.map(label => label.sellerName);
      const myseries = data.map(serie => round(100.0 * serie.deals / serie.visited, 1));

      setChartData({
        labels: {
          categories: myLabels
        },
        series: [
          {
              name: "% Sucesso",
              data: myseries                   
          }
        ]
      });
    });
  }, []);

  const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
  };

  return (
    <Chart
      options={{...options,  xaxis: chartData.labels}}
      series={chartData.series}
      type="bar"
      height= "240"
    />
  )

}