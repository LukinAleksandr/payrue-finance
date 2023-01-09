import { ReactElement } from 'react';
import {
  ContainerFluidStyled,
  ContainerSmallStyled,
  ContainerStyled,
} from './container.styled';

export enum ContainerVariant {
  Default = 'default',
  Small = 'small',
  Fluid = 'fluid',
}

export interface ContainerProps {
  variant?: ContainerVariant;
  children?: ReactElement;
}

export default function Container({
  variant = ContainerVariant.Default,
  children,
  ...props
}: ContainerProps) {
  switch (variant) {
    case ContainerVariant.Default: {
      return <ContainerStyled {...props}>{children}</ContainerStyled>;
    }
    case ContainerVariant.Small: {
      return <ContainerSmallStyled {...props}>{children}</ContainerSmallStyled>;
    }
    case ContainerVariant.Fluid: {
      return <ContainerFluidStyled {...props}>{children}</ContainerFluidStyled>;
    }
    default: {
      return <ContainerStyled {...props}>{children}</ContainerStyled>;
    }
  }
}
