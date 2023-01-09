import { ButtonProps } from '@mui/material/Button';
import clsx from 'clsx';
import {
  NavLinkStyled,
  TextButton,
  DangerButton,
  GhostButton,
  PrimaryButton,
  SecondaryButton,
} from './button.styled';

export enum ButtonSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
  danger = 'danger',
  text = 'text',
}

export interface BtnProps extends Omit<ButtonProps, 'variant' | 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  // eslint-disable-next-line
  state?: any;
}

function Button({
  variant = ButtonVariant.primary,
  size = ButtonSize.medium,
  children,
  href,
  state,
  className,
  ...props
}: BtnProps) {
  const clsxname = clsx(className, size);

  const renderButton = () => {
    switch (variant) {
      case ButtonVariant.primary:
        return (
          <PrimaryButton className={clsxname} {...props}>
            {children}
          </PrimaryButton>
        );
      case ButtonVariant.secondary:
        return (
          <SecondaryButton className={clsxname} {...props}>
            {children}
          </SecondaryButton>
        );
      case ButtonVariant.ghost:
        return (
          <GhostButton className={clsxname} {...props}>
            {children}
          </GhostButton>
        );
      case ButtonVariant.danger:
        return (
          <DangerButton className={clsxname} {...props}>
            {children}
          </DangerButton>
        );
      case ButtonVariant.text:
        return (
          <TextButton className={clsxname} {...props}>
            {children}
          </TextButton>
        );
      default:
        return (
          <PrimaryButton className={clsxname} {...props}>
            {children}
          </PrimaryButton>
        );
    }
  };

  return href ? (
    <NavLinkStyled state={state} to={href}>
      {renderButton()}
    </NavLinkStyled>
  ) : (
    renderButton()
  );
}

export default Button;
