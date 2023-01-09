import {
  Root,
  TokenIcon,
  TokenInfo,
  TokenName,
  TokenPrice,
  TokenChanged,
} from './swap-price.styled';

export interface SwapPriceProps {
  icon: string;
  label: string;
  price: number;
  changed: number | null;
}

function SwapPrice({ icon, label, price, changed }: SwapPriceProps) {
  const isDanger = !!changed && changed < 0;

  return (
    <Root>
      <TokenInfo>
        <TokenIcon alt={label} src={icon} width={40} />
        <TokenName>{label}</TokenName>
      </TokenInfo>
      <TokenPrice className="price">
        {price}
        {!!changed && (
          <TokenChanged danger={isDanger}>
            {!isDanger && '+'}
            {changed.toFixed(4)}
          </TokenChanged>
        )}
      </TokenPrice>
    </Root>
  );
}

export default SwapPrice;
