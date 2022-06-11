import React from 'react';

import { Typography } from '@mui/material';

const errorStyle = {
  color: '#D32F2F',
  fontSize: '14px',
};

interface IFormErrorProps {
  message: string;
}

const FormError: React.FC<IFormErrorProps> = ({ message }: IFormErrorProps) => {
  return <Typography style={errorStyle}>{message}</Typography>;
};

export default FormError;
