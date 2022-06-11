import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from '@mui/material';

import { useAuth, useUserInfos } from '../../../context/UserProvider';
import FormError from '../../Core/FormError';
import { schema } from './validation/schema';

const textFieldStyle = {
  margin: '10px 0',
};

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { setUserCredentials } = useUserInfos();
  const navigate = useNavigate();

  const auth = useAuth();

  const onSubmit = (data: any) => {
    setUserCredentials(data);
  };

  useEffect(() => {
    setUserCredentials(null);
  }, []);

  useEffect(() => {
    if (auth) {
      navigate('/home');
    }
  }, [auth, navigate]);

  return (
    <Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          placeholder="example@example.com"
          type="email"
          fullWidth
          style={textFieldStyle}
          {...register('email')}
          error={!!errors.email}
        />
        <FormError message={errors.email?.message} />

        <TextField
          label="Password"
          placeholder="*********"
          type="password"
          fullWidth
          style={textFieldStyle}
          {...register('password')}
          error={!!errors.password}
        />
        <FormError message={errors.password?.message} />

        <FormControlLabel
          style={{ margin: '16px 0' }}
          control={<Checkbox checked name="rememberMe" color="primary" />}
          label="Remember me"
        />

        <Button type="submit" variant="contained" fullWidth>
          Sign In
        </Button>
      </form>
    </Grid>
  );
};

export default SignInForm;
