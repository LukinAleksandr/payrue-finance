import { Switch } from '@mui/material';
import { useState } from 'react';
import { SelectChevronIcon } from '../../../app/icons';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { setLiquidity } from '../../network/slice';
import {
  Header,
  HeaderRight,
  Root,
  Body,
  StyledLabel,
  StyledInput,
  CheckboxesContainer,
  FormControlLabelStyled,
} from './swap-liquidity.styled';

function SwapLiquidity() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.networks.liquidity);

  const setValue = (e: { [key: string]: boolean }) => dispatch(setLiquidity(e));

  const [showMore, setShowMore] = useState(false);
  const [search, setSearch] = useState('');

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Root>
      <Header onClick={() => setShowMore((prev) => !prev)}>
        <StyledLabel>Exchange liquidity providers</StyledLabel>
        <HeaderRight>
          {Object.entries(value).filter(([, v]) => v).length}/
          {Object.keys(value).length}
          <SelectChevronIcon sx={{ width: 14 }} />
        </HeaderRight>
      </Header>
      {showMore && (
        <Body>
          <StyledInput
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
            value={search}
          />
          <CheckboxesContainer>
            {Object.entries(value)
              .filter(([key]) => key.toLowerCase().indexOf(search) > -1)
              .map(([key, _value]) => (
                <div key={key} className="checkbox-item">
                  <FormControlLabelStyled
                    control={
                      <Switch
                        checked={_value}
                        onChange={(e) =>
                          setValue({ ...value, [key]: e.target.checked })
                        }
                        {...label}
                      />
                    }
                    label={key}
                  />
                </div>
              ))}
          </CheckboxesContainer>
        </Body>
      )}
    </Root>
  );
}

export default SwapLiquidity;
