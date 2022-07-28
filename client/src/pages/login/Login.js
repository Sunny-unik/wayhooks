import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo/logo.png';
import backImg from '../../assets/images/loginBg.png';
import { useNavigate } from 'react-router-dom';
import Copyright from '../../components/copyright/Copyright';
import { InputAdornment } from '@mui/material';
import VisibilityOffTwoTone from '@mui/icons-material/VisibilityOffTwoTone';
import VisibilityTwoTone from '@mui/icons-material/VisibilityTwoTone';

export default function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [domain, setdomain] = useState('');
  const [showHide, setshowHide] = useState('password');

  return (
    <>
      <Grid container component='main' sx={{ height: '100vh' }}>
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
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={logo} style={{ height: '100px', marginBottom: '20px',marginTop: '-50px' }} className='logo' alt='logo' />
            <Typography component='h2' variant='h6'  sx={{marginTop:'-15px'}}>
              Welcome, please sign in using your credentials
            </Typography>
            <Box component='form' noValidate sx={{ mt: 1 ,marginTop:'-5px'}}>
              <TextField
                margin='normal'
                required
                fullWidth
                id='text'
                label='Email or UserName'
                type='text'
                name='email'
                autoFocus
                value={email}
                onChange={e => setemail(e.target.value)}
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
                name='domain'
                label='Domain'
                id='domainName'
                type='text'
                value={domain}
                onChange={e => setdomain(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value='remember' style={{ color: '#457B9D' }} />}
                label='Remember me'
              />
              <Button
                className='submit'
                type='submit'
                fullWidth
                variant='contained'
                onClick={() => navigate('/' + domain)}
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
              >
                <Typography sx={{ fontFamily: 'Sans-serif' }}>Sign In</Typography>
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    variant='body2'
                    onClick={() => navigate('/forgotPassword')}
                    sx={{
                      color: '#1D3557',
                      float: 'right',
                      textDecoration: 'none',
                     
                      fontSize: '1em',
                      '&:hover': { color: '#457B9D', cursor: 'pointer' },
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
