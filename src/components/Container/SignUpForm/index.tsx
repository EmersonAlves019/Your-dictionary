import React, { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, TextField } from '@mui/material';

import { userRegister } from '../../../services/providers/yourDictionaryProvider';
import FormError from '../../Core/FormError';
import { schema } from './validation/schema';

const textFieldStyle = {
  margin: '10px 0',
};

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const { email, password, name } = data;
    const res = await userRegister({ email, password, name });
    res.success && toast.success('Register success');
    res.code === 400 && toast.error('User already exists');
  };

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
          label="User Name"
          placeholder="Your user"
          type="text"
          fullWidth
          style={textFieldStyle}
          {...register('name')}
          error={!!errors.name}
        />
        <FormError message={errors.name?.message} />
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
        <TextField
          label="Confirm Password"
          placeholder="*********"
          type="password"
          fullWidth
          style={textFieldStyle}
          {...register('confirmPassword')}
          error={!!errors.confirmPassword}
        />
        <FormError message={errors.confirmPassword?.message} />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ margin: '10px 0' }}
        >
          Sign Un
        </Button>
      </form>
    </Grid>
  );
};

export default SignUpForm;
