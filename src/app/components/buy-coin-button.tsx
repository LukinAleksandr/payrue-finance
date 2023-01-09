import { Theme, useMediaQuery } from '@mui/material';
import { EthereumIcon } from '../icons';
import { BuyCoinButtonStyled } from './buy-coin-button.styled';

interface BuyCoinButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BuyCoinButton({ onClick }: BuyCoinButtonProps) {
  const isDownMd = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down('md'),
  );
  return (
    <BuyCoinButtonStyled onClick={onClick}>
      <EthereumIcon />
      {!isDownMd && 'Buy Coin'}
    </BuyCoinButtonStyled>
  );
}
