import { SelectChangeEvent } from '@mui/material';
import { useModal } from 'mui-modal-provider';
import { Token } from '../../features/network/slice';
import { ButtonSize } from './button';
import ModalAddToken from './modal-add-token';
import {
  SelectControl,
  SelectStyled,
  SelectItem,
  Chevron,
  AddTokenButton,
} from './select.styled';

export interface SelectProps {
  className?: string;
  options: Token[];
  value?: Token;
  onChange: (event: SelectChangeEvent<unknown>) => void;
}

export default function Select({
  className,
  options,
  value,
  onChange,
}: SelectProps) {
  const { showModal } = useModal();

  return (
    <SelectControl className={className}>
      {value && (
        <SelectStyled
          defaultValue={value?.value}
          displayEmpty
          IconComponent={Chevron}
          MenuProps={{
            MenuListProps: {
              sx: {
                padding: 1,
              },
            },
          }}
          onChange={onChange}
          value={value?.value}
        >
          <AddTokenButton
            onClick={() => showModal(ModalAddToken)}
            size={ButtonSize.medium}
          >
            Add token
          </AddTokenButton>
          {options.map(({ icon, label, value: optionValue }) => (
            <SelectItem key={optionValue} value={optionValue}>
              {!!icon && <img alt={label} height={24} src={icon} width={24} />}
              {label}
            </SelectItem>
          ))}
        </SelectStyled>
      )}
    </SelectControl>
  );
}
