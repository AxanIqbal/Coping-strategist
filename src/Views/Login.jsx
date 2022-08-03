import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Box from '../Components/Box';
import './views.css';
import { backEndApi, useLoginMutation } from '../redux/apis';
import { login, Roles } from '../redux/slicers/userSlicer';

const schema = yup.object({
  username: yup.string()
    .required(),
  password: yup.string()
    .required(),
})
  .required();

function Login() {
  const navigate = useNavigate();
  const [loginUser, {
    data,
    isLoading,
    isSuccess,
    error,
  }] = useLoginMutation();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   if (error) {
  // toast.error(error.code, {
  //   position: 'top-center',
  //   autoClose: 1000,
  // hideProgressBar: true,
  // closeOnClick: true,
  // pauseOnHover: true,
  // draggable: true,
  // progress: undefined,
  // });
  //   }
  // }, [error]);

  useEffect(() => {
    if (error && error.data) {
      toast.error(error.data.message, {
        textColor: 'white',
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess && data) {
      if (data.role !== Roles.Admin) {
        toast.error('Not an admin', {
          // backgroundColor: 'red',
          textColor: 'white',
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(backEndApi.util.resetApiState());
      } else {
        dispatch(backEndApi.util.resetApiState());
        dispatch(login(data));
        navigate('/');
      }
    }
    return () => {
    };
  }, [isSuccess, data]);

  const onSubmit = (e) => loginUser(e);

  return (
    <Box showHeading heading="Welcome" showBack={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <Controller
            control={control}
            name="username"
            render={({
              field,
              fieldState,
            }) => (
              <TextField
                {...field}
                fullWidth
                helperText={fieldState.error?.message}
                error={Boolean(fieldState.error)}
                label="username"
                placeholder={'Enter you\'re Username'}
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
        <button type="submit" className="signinButton" disabled={isLoading}>
          {isLoading ? <CircularProgress size={15} color="inherit" /> : 'Sign In'}
        </button>
      </form>
      {/* <footer> */}
      {/*   <Container style={{ */}
      {/*     backgroundColor: 'rgba(219, 212, 41, 0.39)', */}
      {/*     display: 'flex', */}
      {/*     justifyContent: 'center', */}
      {/*     borderRadius: '20px', */}
      {/*     marginTop: '10px', */}
      {/*   }} */}
      {/*   > */}
      {/*     <p> */}
      {/*       Don’t have an account? */}
      {/*       {' '} */}
      {/*       <Link to="/signup">sign up</Link> */}
      {/*     </p> */}
      {/*   </Container> */}
      {/* </footer> */}
    </Box>
  );
}

export default Login;
