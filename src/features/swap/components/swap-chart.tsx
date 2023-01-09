import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import Highstock from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useTheme } from '../../../app/hooks';
import {
  useFetchChartDataQuery,
  useFetchCoinsListQuery,
  useFetchPayPriceQuery,
} from '../../coin-gecko';
import { Root } from './swap-chart.styled';
import { Token } from '../../network/slice';
import SwapPrice from './swap-price';

export interface SwapChartProps {
  pay: Token;
}

function SwapChart({ pay, ...props }: SwapChartProps) {
  const { theme } = useTheme();
  const { data: coins = [] } = useFetchCoinsListQuery();
  const [changedPrice, setChangedPrice] = useState(0);

  const coin = useMemo(
    () =>
      coins
        .filter(({ id }) => id !== 'unicorn-token')
        .find((c) => c.symbol === pay?.value.toLowerCase()),
    [pay, coins],
  );

  const { data: price = { usd: 0 } } = useFetchPayPriceQuery({
    id: coin?.id || '',
    vsCurrency: [],
  });

  const { data, isFetching } = useFetchChartDataQuery(coin?.id || '', {
    skip: !coin,
  });

  const handlePeriodChange = useCallback(
    // eslint-disable-next-line
    (ev: any) => {
      setTimeout(() => {
        const { extKey } = ev.xAxis[0].axis;
        const d = extKey.split(',');

        const startDate = d[0];
        const endDate = d[1];
        const startPrice = data?.prices.find(([time]) =>
          String(time).startsWith(startDate.slice(0, 5)),
        );
        const endPrice = data?.prices.find(([time]) =>
          String(time).startsWith(endDate.slice(0, 5)),
        );

        if (startPrice && endPrice) {
          setChangedPrice(endPrice[1] - startPrice[1]);
        } else setChangedPrice(0);
      }, 100);
    },
    [data],
  );

  const chartData = useMemo(() => data?.prices || [], [data]);

  const ref = useRef<HighchartsReact.RefObject>(null);

  const options = useMemo(
    () => ({
      xAxis: {
        type: 'datetime',
        labels: {
          style: {
            color: theme?.palette.secondary.dark,
          },
        },
      },
      yAxis: {
        title: {
          text: 'Price',
          style: {
            color: theme?.palette.secondary.dark,
          },
        },
        labels: {
          enabled: false,
          style: {
            color: theme?.palette.secondary.dark,
          },
        },
        gridLineWidth: 0,
      },
      legend: {
        enabled: false,
      },
      chart: {
        backgroundColor: 'transparent',
        height: 350,
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, '#4594F7'],
              [0.1, Highcharts.color('#4594F7').setOpacity(0.5).get('rgba')],
              [0.7, Highcharts.color('#4594F7').setOpacity(0).get('rgba')],
            ],
          },
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
      scrollbar: {
        enabled: false,
      },
      navigator: {
        enabled: false,
      },
      rangeSelector: {
        selected: 'all',

        inputEnabled: false,
        buttonPosition: {
          align: 'right',
        },
        buttonTheme: {
          fill: theme?.palette.primary.dark,
          r: 6,

          style: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            color: theme?.palette.secondary.main,
            fontSize: 14,
          },
        },
        labelStyle: {
          display: 'none',
        },
        buttons: [
          {
            type: 'day',
            count: 7,
            text: '1W',
            events: {
              click: handlePeriodChange,
            },
          },
          {
            type: 'month',
            count: 1,
            text: '1M',
            title: 'View 1 month',
            events: {
              click: handlePeriodChange,
            },
          },
          {
            type: 'month',
            count: 3,
            text: '3M',
            title: 'View 3 months',
            events: {
              click: handlePeriodChange,
            },
          },
          {
            type: 'month',
            count: 6,
            text: '6M',
            title: 'View 6 months',
            events: {
              click: handlePeriodChange,
            },
          },
          {
            type: 'all',
            text: 'All',
            title: 'View all',
            events: {
              click: handlePeriodChange,
            },
          },
        ],
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: 'area',
          name: pay?.label,
          tooltip: {
            valueDecimals: 4,
          },
          data: [...chartData],
        },
      ],
    }),
    [chartData, theme, pay, handlePeriodChange],
  );

  useEffect(() => {
    if (chartData.length && coin) {
      setChangedPrice(chartData[chartData.length - 1][1] - chartData[0][1]);
    } else {
      setChangedPrice(0);
    }
  }, [chartData, coin]);

  useEffect(() => {
    if (ref.current) {
      if (isFetching) {
        ref.current.chart.showLoading();
      } else {
        ref.current.chart.hideLoading();
      }
    }
  }, [isFetching]);

  return (
    <Root {...props}>
      <SwapPrice
        changed={changedPrice}
        icon={pay.icon}
        label={pay.label}
        price={price.usd}
      />
      {coin && (
        <HighchartsReact
          ref={ref}
          constructorType="stockChart"
          highcharts={Highstock}
          options={options}
        />
      )}
    </Root>
  );
}

export default memo(SwapChart);
