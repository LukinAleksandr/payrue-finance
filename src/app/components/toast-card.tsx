// eslint-disable-next-line import/no-unresolved
import { ToastProps } from 'react-toastify/dist/types';
import { Root, Text } from './toast-card.styled';

export interface ToastCardProps {
  toastProps: ToastProps;
}

export default function ToastCard({ toastProps }: ToastCardProps) {
  return (
    <Root>
      <Text>{toastProps.role}</Text>
    </Root>
  );
}
