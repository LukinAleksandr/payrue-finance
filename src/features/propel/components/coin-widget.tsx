import {
  Root,
  Header,
  HeaderValue,
  HeaderDifference,
  Row,
  Cell,
  Footer,
  FooterLeft,
  FooterText,
  FooterLink,
} from './coin-widget.styled';

export enum CoinWidgetVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface WidgetRow {
  value: string | number;
  label: string | number;
}

export interface CoinWidgetProps {
  headerValue: string | number;
  headerDifference: string | number;
  variant?: CoinWidgetVariant;
  rows: WidgetRow[];
  by: {
    name: string;
    link: string;
  };
}

function CoinWidget({
  variant = CoinWidgetVariant.PRIMARY,
  headerValue,
  headerDifference,
  rows,
  by,
}: CoinWidgetProps) {
  return (
    <Root>
      <Header variant={variant}>
        <HeaderValue variant={variant}>{headerValue}</HeaderValue>
        <HeaderDifference variant="body1">
          {`(${headerDifference}%)`}
        </HeaderDifference>
      </Header>
      {rows.map((row, index) => (
        <Row key={index}>
          <Cell variant={variant}>{row.label}</Cell>
          <Cell variant={variant}>{row.value}</Cell>
        </Row>
      ))}
      <Footer variant={variant}>
        <FooterLeft>
          <FooterText variant="body2">Powered by</FooterText>
          <FooterLink href={by.link} variant={variant}>
            {by.name}
          </FooterLink>
        </FooterLeft>
      </Footer>
    </Root>
  );
}

export default CoinWidget;
