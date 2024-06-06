'use client';

import { useTheme } from '@mui/material';
import { FC } from 'react';
import { FieldError } from 'react-hook-form';
import { When } from 'react-if';

import StyledErrorMessage from '@/components/Form/ErrorMessage/styled';

interface ErrorMessageProps {
    error?: FieldError,
    className?: string
}
const ErrorMessage: FC<ErrorMessageProps> = ({ error, className = '' }) => {
  const theme = useTheme();

  return (
    <When condition={Boolean(error?.message)}>
      <StyledErrorMessage
        theme={theme}
        className={className}
      >
        {error?.message}
      </StyledErrorMessage>
    </When>
  );
};

export default ErrorMessage;
