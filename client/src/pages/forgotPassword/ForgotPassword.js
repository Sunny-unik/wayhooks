import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../../components/copyright/Copyright';
import React, { useState } from 'react';
import { IconButton, InputAdornment, Slide, Snackbar } from '@mui/material';
import VisibilityTwoTone from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoTone from '@mui/icons-material/VisibilityOffTwoTone';
import logo from '../../assets/logo/logo.svg';
import { useNavigate } from 'react-router-dom';
import validOtpPassword from '../../validations/ValidOtpPassword';

export default function SignIn() {
  const navigate = useNavigate();
  const [otp, setotp] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [showHide, setshowHide] = useState('password');
  const [anotherShow, setanotherShow] = useState('password');
  const [open, setOpen] = useState(false);
  const [barMsg, setbarMsg] = useState('');
  const [transition, setTransition] = useState(undefined);
  const [colors, setcolors] = useState({ color: '#F1FAEE', backgroundColor: '#23ce7b' });

  const TransitionTop = props => <Slide {...props} direction='down' />;

  const subClick = Transition => () => {
    const validObj = validOtpPassword(otp, password, confirmPassword);
    if (!validObj.valid) {
      setbarMsg(validObj.msg);
      setcolors({ color: '#F1FAEE', backgroundColor: '#E63946' });
      setTransition(() => Transition);
      setOpen(true);
    } else {
      setbarMsg(validObj.msg);
      setcolors({ color: '#F1FAEE', backgroundColor: '#23ce7b' });
      setTransition(() => Transition);
      setOpen(true);
      setTimeout(() => navigate('/'), 250);
    }
  };

  const barClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const Alertbar = (
    <React.Fragment>
      <IconButton size='small' aria-label='close' color='inherit' onClick={barClose}>
        X
      </IconButton>
    </React.Fragment>
  );

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
                  <Button onClick={() => setshowHide(showHide === 'text' ? 'password' : 'text')}>
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
                  <Button onClick={() => setanotherShow(anotherShow === 'text' ? 'password' : 'text')}>
                    {anotherShow === 'text' ? <VisibilityOffTwoTone /> : <VisibilityTwoTone />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <Button type='button' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} onClick={subClick(TransitionTop)}>
            Update Password
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={5000}
            onClose={barClose}
            TransitionComponent={transition}
            message={barMsg}
            action={Alertbar}
            key={transition}
            sx={{
              '& .MuiSnackbarContent-root': colors,
            }}
          />
          <Button type='button' fullWidth variant='outlined' sx={{ mb: 2 }} onClick={() => navigate('/login')}>
            Go Back
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ my: 4 }} />
    </Container>
  );
}
