import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  labels: string[],
  series: number[],
}

export function DonutChart() {

  let chartData : ChartData = {labels: [], series: []};

  axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then((resp) => {
      const data = resp.data as SaleSum[];

      const myLabels = data.map(x => x.sellerName);
      const myseries = data.map(x => x.sum);

      chartData = {labels: myLabels, series: myseries};
      console.log(chartData);
    });

  const options = {
      legend: {
          show: true
      }
  };

  // const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //   labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  // };


  return (
    <Chart
      options={{...options,  labels: chartData.labels}}
      series={chartData.series}
      type="donut"
      height= "240"
    />
  )
}