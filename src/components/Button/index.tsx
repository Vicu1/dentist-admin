import { ButtonPropsColorOverrides, ButtonPropsVariantOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Else, If, Then } from 'react-if';

import ButtonStyled from '@/components/Button/styled';

interface ButtonProps {
    children: ReactNode
    disabled?: boolean,
    color?: OverridableStringUnion<'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning', ButtonPropsColorOverrides>
    loading?: boolean,
    type?: any,
    variant?:  OverridableStringUnion<'contained' | 'text' | 'outlined', ButtonPropsVariantOverrides>,
    url?: string
}

const Button: FC<ButtonProps> = ({
  loading = false,
  disabled = false,
  color = 'primary',
  type = '',
  children,
  variant = 'contained',
  url = ''
}) => {
  return (
    <If condition={url}>
      <Then>
        <Link href={url}>
          <Button variant={'text'}>
            {children}
          </Button>
        </Link>
      </Then>
      <Else>
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
      </Else>
    </If>
  );

};
export default Button;
