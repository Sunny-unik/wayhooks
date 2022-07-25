import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../../components/copyright/Copyright';
import React, { useState } from 'react';
import { InputAdornment } from '@mui/material';
import VisibilityTwoTone from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoTone from '@mui/icons-material/VisibilityOffTwoTone';
import logo from '../../assets/logo/logo.svg';

export default function SignIn() {
  const [otp, setotp] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [showHide, setshowHide] = useState('password');
  const [anotherShow, setanotherShow] = useState('password');

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={logo} alt='Wayhooks' width='100em' />
        <br />
        <Typography component='h1' variant='h4' sx={{ fontFamily: 'Nunito' }}>
          OTP sent to your email.
        </Typography>
        <Box component='form' noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='otp'
            label='Enter OTP'
            name='otp'
            autoComplete='otp'
            type='number'
            value={otp}
            autoFocus
            onChange={e => setotp(e.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Enter Password'
            type={showHide}
            id='password'
            value={password}
            autoComplete='current-password'
            onChange={e => setpassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button
                    onClick={() => {
                      setshowHide(showHide === 'text' ? 'password' : 'text');
                    }}
                  >
                    {showHide === 'text' ? <VisibilityOffTwoTone /> : <VisibilityTwoTone />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='confirmPassword'
            label='Enter Password Again'
            type={anotherShow}
            id='confirmPassword'
            value={confirmPassword}
            autoComplete='current-password'
            onChange={e => setconfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button
                    onClick={() => {
                      setanotherShow(anotherShow === 'text' ? 'password' : 'text');
                    }}
                  >
                    {anotherShow === 'text' ? <VisibilityOffTwoTone /> : <VisibilityTwoTone />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <Button type='button' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Update Password
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ my: 4 }} />
    </Container>
  );
}
