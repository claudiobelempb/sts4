import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/saleSum';
import { BASE_URL } from 'utils/requests';

type ChartDataProps = {
  labels: string[],
  series: number[],
}

export function DonutChart() {

  const [chartData, setChartData] = useState<ChartDataProps>({labels: [], series: []});

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
    .then((resp) => {
      const data = resp.data as SaleSum[];

      const myLabels = data.map(label => label.sellerName);
      const myseries = data.map(serie => serie.sum);

      setChartData({labels: myLabels, series: myseries});
      // console.log(chartData);
    });
  }, []);

  const options = {
      legend: {
          show: true
      }
  };

  return (
    <Chart
      options={{...options,  labels: chartData.labels}}
      series={chartData.series}
      type="donut"
      height= "240"
    />
  )
}