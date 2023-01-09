import { useTheme } from '@mui/material';
import { TargetIcon } from '../../../app/icons';
import { useGetGeckoCoinBySymbolQuery } from '../../coin-gecko';
import { useGetCMCPayrueWidgetQuery } from '../api';
import { CoinWidget, FeatureCard, NetworkCard } from '../components';
import { CoinWidgetVariant } from '../components/coin-widget';
import { propelNetworks, features } from '../utils';
import {
  Logo,
  Root,
  Title,
  Subtitle,
  List,
  Item,
  ItemTitle,
  ItemText,
  ItemLink,
  WidgetWrapper,
  Row,
  PayrueLogoWrapper,
  PayrueLogoImg,
  PayrueLogoText,
  WidgetDesc,
  TablesWrapper,
  TableWrapper,
  DescriptionBlock,
  Description,
  Networks,
  Features,
} from './propel-screen.styled';

const toLocalStringFormat = (num: number) =>
  num.toLocaleString('en-Us', {
    style: 'currency',
    currency: 'USD',
  });

export default function PropelScreen(): JSX.Element {
  const { palette } = useTheme();
  const { data: coinMarketCap } = useGetCMCPayrueWidgetQuery();
  const { data: coinGecko } = useGetGeckoCoinBySymbolQuery('payrue');

  const coinMarketCapQuote = coinMarketCap?.quote['2781'];
  const coinMarketCapPercentChange = Number(
    Number(coinMarketCapQuote?.percent_change_24h).toFixed(2),
  );
  const coinMarketCapRank = coinMarketCap?.cmc_rank || '-';
  const coinMarketCapCAP = toLocalStringFormat(
    coinMarketCapQuote?.market_cap || 0,
  );
  const coinMarketCapVolume = toLocalStringFormat(
    coinMarketCapQuote?.volume_24h || 0,
  );

  const coinMarketCapWidgetData = {
    by: {
      // eslint-disable-next-line max-len
      link: 'https://coinmarketcap.com/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=localhost&utm_content=payrue%20(propel)',
      name: 'CoinMarketCap',
    },
    headerDifference: coinMarketCapPercentChange || 0,
    headerValue: `$ ${coinMarketCapQuote?.price.toFixed(8)} USD`,
    rows: [
      {
        label: 'Rank',
        value: coinMarketCapRank,
      },
      {
        label: 'Market CAP',
        value: `${coinMarketCapCAP} USD`,
      },
      {
        label: 'Volume',
        value: `${coinMarketCapVolume} USD`,
      },
    ],
  };

  const coinGeckoPercentChange = Number(
    Number(coinGecko?.market_data?.price_change_percentage_24h || 0).toFixed(2),
  );

  const coinGeckoCapRank = coinGecko?.market_cap_rank || '-';
  const coinGeckoCapCAP = toLocalStringFormat(
    coinGecko?.market_data.market_cap.usd || 0,
  );
  const coinGeckoCap24Volume = toLocalStringFormat(
    coinGecko?.market_data.total_volume.usd || 0,
  );

  const coinGeckoCapVolume = [
    (coinGecko?.market_data?.high_24h?.usd || 0).toFixed(6),
    (coinGecko?.market_data?.low_24h?.usd || 0).toFixed(6),
  ].join(' / ');

  const coinGeckoWidgetData = {
    by: {
      // eslint-disable-next-line max-len
      link: 'https://www.coingecko.com/en?utm_source=payrue.finance&utm_medium=coin_ticker_widget&utm_content=payrue',
      name: 'CoinGecko',
    },
    headerDifference: coinGeckoPercentChange,
    headerValue: `$ ${Number(
      coinGecko?.market_data.current_price.usd || 0,
    ).toFixed(8)} USD`,
    rows: [
      {
        label: 'Rank',
        value: coinGeckoCapRank,
      },
      {
        label: 'Market CAP',
        value: `${coinGeckoCapCAP} USD`,
      },
      {
        label: '24H Volume',
        value: `${coinGeckoCap24Volume} USD`,
      },
      {
        label: '24H Volume',
        value: `${coinGeckoCapVolume}`,
      },
    ],
  };

  return (
    <Root>
      <Logo />
      <Title variant="h1">PROPEL</Title>
      <Subtitle variant="subtitle2">
        Propel is the native token of PayRue and it associated application
      </Subtitle>
      <List>
        <Item>
          <ItemTitle variant="h4">Binance Smart Chain</ItemTitle>
          <ItemText variant="body1">Blockchain</ItemText>
        </Item>
        <Item>
          <ItemTitle variant="h4">8 Billion PROPEL</ItemTitle>
          <ItemText variant="body1">Total Supply</ItemText>
        </Item>
        <Item sx={{ background: palette.primary.dark }}>
          <ItemTitle variant="h4">
            Open at BSCScan
            <ItemLink
              // eslint-disable-next-line max-len
              href={`${process.env.REACT_APP_BSC_URL}/token/${process.env.REACT_APP_BSC_PROPEL_TOKEN_ADDRESS}`}
              rel="noreferrer"
              target="_blank"
            >
              <TargetIcon />
            </ItemLink>
          </ItemTitle>
          <ItemText variant="body1">Total Supply</ItemText>
        </Item>
      </List>
      <WidgetWrapper>
        <Row>
          <PayrueLogoWrapper>
            <PayrueLogoImg />
            <PayrueLogoText>PayRue </PayrueLogoText>
          </PayrueLogoWrapper>
          <WidgetDesc variant="body1">PROPEL/USD</WidgetDesc>
        </Row>
        <TablesWrapper>
          <TableWrapper>
            <CoinWidget {...coinMarketCapWidgetData} />
          </TableWrapper>
          <TableWrapper>
            <CoinWidget
              {...coinGeckoWidgetData}
              variant={CoinWidgetVariant.SECONDARY}
            />
          </TableWrapper>
        </TablesWrapper>
      </WidgetWrapper>
      <DescriptionBlock>
        <Description variant="subtitle2">
          Propel is the native token of PayRue. Propel utilities are governance
          token, staking, liquidity mining, discounts and rewards. Propel is
          available to trade on BSC, Polygon and Fantom.
        </Description>
      </DescriptionBlock>
      <Networks>
        {propelNetworks.map((network, index) => (
          <NetworkCard key={index} {...network} />
        ))}
      </Networks>
      <Features>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </Features>
    </Root>
  );
}
