import { SelectChangeEvent } from '@mui/material';
import { Select } from '../../../app/components';
import { useAppSelector } from '../../../app/store';
import { Token } from '../../network/slice';
import {
  SwapFieldStyled,
  SwapFieldTop,
  SwapFieldLabel,
  SwapFieldControls,
  SwapFieldBalance,
  SwapFieldBody,
  SwapFieldInputWrapper,
  SwapFieldPlaceholder,
  SwapFieldInput,
} from './swap-field.styled';

export interface SwapFieldProps {
  label: string;
  token?: Token;
  onChangeToken: (token: Token) => void;
  balance: number;
  amount: number;
  readonly?: boolean;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SwapField({
  token,
  onChangeToken,
  label,
  balance = 0,
  amount = 0,
  readonly,
  value,
  onChange,
}: SwapFieldProps) {
  const tokens = useAppSelector((state) => state.networks.tokens);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedToken = tokens.find(
      (item) => item.value === event.target.value,
    );
    if (selectedToken) {
      onChangeToken(selectedToken);
    }
  };

  return (
    <SwapFieldStyled>
      <SwapFieldTop>
        <SwapFieldLabel>{label}</SwapFieldLabel>
        <SwapFieldControls>
          <SwapFieldLabel>Balance:</SwapFieldLabel>
          <SwapFieldBalance>{balance}</SwapFieldBalance>
        </SwapFieldControls>
      </SwapFieldTop>
      <SwapFieldBody>
        <Select onChange={handleChange} options={tokens || []} value={token} />
        <SwapFieldInputWrapper>
          <SwapFieldPlaceholder>≈ ${amount}</SwapFieldPlaceholder>
          <SwapFieldInput
            lang="en"
            min="0"
            onChange={onChange}
            placeholder="Amount"
            readOnly={readonly}
            step="0.01"
            type="number"
            value={value}
          />
        </SwapFieldInputWrapper>
      </SwapFieldBody>
    </SwapFieldStyled>
  );
}

export default SwapField;
