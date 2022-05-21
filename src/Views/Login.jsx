import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import Box from '../Components/Box';
import { auth } from '../utils/firebase/firebase';
import './views.css';

const schema = yup.object({
  email: yup.string()
    .email()
    .required(),
  password: yup.string()
    .required(),
})
  .required();

function Login() {
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const {
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (error) {
      toast.error(error.code, {
        position: 'top-center',
        autoClose: 1000,
        // hideProgressBar: true,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined,
      });
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const onSubmit = (e) => signInWithEmailAndPassword(e.email, e.password);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <Controller
            control={control}
            name="email"
            render={({
              field,
              fieldState,
            }) => (
              <TextField
                {...field}
                fullWidth
                helperText={fieldState.error?.message}
                error={Boolean(fieldState.error)}
                label="email"
                placeholder={'Enter you\'re email address'}
                InputProps={{
                  style: {
                    borderRadius: '25px',
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fa-solid fa-envelope" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div className="container">
          <Controller
            control={control}
            name="password"
            render={({
              field,
              fieldState,
            }) => (
              <TextField
                {...field}
                fullWidth
                helperText={fieldState.error?.message}
                error={Boolean(fieldState.error)}
                label="password"
                type="password"
                placeholder={'Enter you\'re password'}
                InputProps={{
                  style: {
                    borderRadius: '25px',
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <i className="fa-solid fa-unlock" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div className="rememberMe">
          <Link className="linkButton" to="/forget-password"><p>Forgot password?</p></Link>
        </div>
        <button type="submit" className="signinButton">
          {loading ? <CircularProgress size={15} color="inherit" /> : 'Sign In'}
        </button>
      </form>
    </Box>
  );
}

export default Login;
