import { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useMemo, useState } from 'react';
import { addToken } from '../../features/network/slice';
import {
  ResponseToken,
  useFetchOneInchTokensQuery,
} from '../../features/one-inch';
import toast from '../services/notifications-service';
import { useAppDispatch, useAppSelector } from '../store';
import Modal from './modal';

import { Title, Input, List, Item, Cell, Text } from './modal-add-token.styled';

export default function ModalAddToken({ onClose, ...props }: DialogProps) {
  const dispatch = useAppDispatch();
  const networkId = useAppSelector((state) => state.networks.networkId);
  const tokens = useAppSelector((state) => state.networks.tokens);
  const { data: allTokens } = useFetchOneInchTokensQuery(networkId);
  const [tokenName, setTokenName] = useState('');

  const founded = useMemo(() => {
    if (allTokens && tokenName.length > 2) {
      const searchTokens = Object.entries(allTokens).filter((c) =>
        c[0].startsWith(tokenName),
      );
      return searchTokens;
    }
    return [];
  }, [allTokens, tokenName]);

  const onCancel = () => onClose?.({}, 'backdropClick');

  const handleClick = ([address, token]: [string, ResponseToken]) => {
    const isDuplicate = tokens.find((item) => item.address === address);
    if (isDuplicate) {
      toast({
        type: 'error',
        message: `The token already exists in tokens`,
      });
    } else {
      dispatch(
        addToken({
          icon: token.logoURI,
          tags: token.tags,
          address,
          decimals: token.decimals,
          label: token.symbol,
          value: token.name,
        }),
      );
      toast({
        type: 'success',
        message: `The token already exists in tokens`,
      });
      onCancel();
    }
  };

  return (
    <Modal onClose={onCancel} {...props}>
      <Title>Add Custom Token</Title>
      <DialogContent>
        <Input
          name="token"
          onChange={(event) => setTokenName(event.target.value)}
          placeholder="0x...."
          required
          value={tokenName}
        />
      </DialogContent>
      <DialogActions>
        <List>
          {founded.map((item) => (
            <Item key={item[0]} onClick={() => handleClick(item)}>
              <Cell>
                <Text>Symbol: {item[1].symbol}</Text>
                <Text>Name: {item[1].name}</Text>
                <Text>Decimals: {item[1].decimals}</Text>
              </Cell>
              <img alt="token" src={item[1].logoURI} width={50} />
            </Item>
          ))}
        </List>
      </DialogActions>
    </Modal>
  );
}
