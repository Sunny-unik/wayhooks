import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import backImg from '../../assets/images/signup.png';
import Copyright from '../../components/copyright/Copyright';
import VisibilityOffTwoTone from '@mui/icons-material/VisibilityOffTwoTone';
import VisibilityTwoTone from '@mui/icons-material/VisibilityTwoTone';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import validSignup from '../../validations/ValidSignup';

export default function Login() {
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [date, setdate] = useState(null);
  const [password, setpassword] = useState('');
  const [showHide, setshowHide] = useState('password');

  return (
    <>
      <Grid container component='main' sx={{ height: '100vh', marginTop: '0rem' }}>
        <CssBaseline />
        <Grid
          className='loginBgImgDiv'
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: t => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h2' variant='h5' sx={{ marginTop: '6rem' }}>
              Please Register your Domain
            </Typography>
            <Box component='form' noValidate sx={{ mt: 1 }}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='name'
                label='Enter Name'
                type='text'
                name='name'
                value={name}
                onChange={e => setname(e.target.value)}
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                id='username'
                label='Enter Username'
                type='text'
                name='username'
                value={username}
                onChange={e => setusername(e.target.value)}
                autoFocus
              />
              <Box sx={{ marginTop: '1rem' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    openTo='year'
                    views={['year', 'month', 'day']}
                    inputFormat='dd/MM/yyyy'
                    label='Date Of Birth'
                    value={date}
                    onChange={setDate => setdate(setDate)}
                    renderInput={params => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email'
                type='text'
                name='email'
                value={email}
                onChange={e => setemail(e.target.value)}
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type={showHide}
                id='password'
                value={password}
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
              <Button
                className='submit'
                type='button'
                fullWidth
                variant='contained'
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#1D3557',
                  font: 'sans-serif',
                  fontFamily: 'sans-serif',
                  '&:hover': {
                    backgroundColor: '#457B9D',
                    boxShadow: 'none',
                  },
                }}
                onClick={() => {
                  const validationObj = validSignup(name, username, date, email, password);
                  validationObj.valid ? navigate('/plans') : alert(validationObj.msg);
                }}
              >
                <Typography sx={{ fontFamily: 'Sans-serif' }}>Submit</Typography>
              </Button>
            </Box>
          </Box>
          <Copyright />
        </Grid>
      </Grid>
    </>
  );
}
