import { ButtonPropsColorOverrides, ButtonPropsVariantOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { FC, ReactNode } from 'react';

import ButtonStyled from '@/components/Button/styled';

interface ButtonProps {
    children: ReactNode
    disabled?: boolean,
    color?: OverridableStringUnion<'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning', ButtonPropsColorOverrides>
    loading?: boolean,
    type?: any,
    variant?:  OverridableStringUnion<'contained' | 'text' | 'outlined', ButtonPropsVariantOverrides>
}

const Button: FC<ButtonProps> = ({
  loading = false,
  disabled = false,
  color = 'primary',
  type = '',
  children,
  variant = 'contained'
}) => {
  return (
    <ButtonStyled
      disableElevation
      loading={loading}
      disabled={disabled}
      variant={variant}
      color={color}
      type={type}
    >
      {children}
    </ButtonStyled>
  );

};
export default Button;
