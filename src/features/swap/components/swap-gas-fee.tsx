import React, { useState } from 'react';
import { SelectChevronIcon } from '../../../app/icons';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { setGasFee } from '../../network/slice';
import {
  Header,
  HeaderRight,
  Root,
  StyledInput,
  StyledLabel,
} from './swap-gas-fee.styled';

function SwapGasFee() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.networks.gasFee);

  const setValue = (e: string) => dispatch(setGasFee(e));

  const [showMore, setShowMore] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Root>
      <Header onClick={() => setShowMore((prev) => !prev)}>
        <StyledLabel>Gas Fee</StyledLabel>
        <HeaderRight>
          {value}
          <SelectChevronIcon sx={{ width: 14 }} />
        </HeaderRight>
      </Header>
      {showMore && (
        <StyledInput onChange={handleOnChange} type="number" value={value} />
      )}
    </Root>
  );
}

export default SwapGasFee;
