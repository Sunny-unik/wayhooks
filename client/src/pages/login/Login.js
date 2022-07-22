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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../assets/logo/logo.png';
import backImg from '../../assets/images/loginBg.png';
import { Link as NavLink, useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" { ...props }>
      { 'Copyright © ' }
      <NavLink to="/" style={ { textDecoration: "none", color: "#1D3557" } } sx={ { '&:hover': { color: '#457B9D' } } }>
        wayhooks
      </NavLink>
      { ' ' }2022{ '.' }
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [type, settype] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      domain: data.get('domain')
    });
  };

  return (
    <ThemeProvider theme={ theme }>
      <Grid container component="main" sx={ { height: '100vh' } }>
        <CssBaseline />
        <Grid className='loginBgImgDiv' item xs={ false } sm={ 4 } md={ 7 } sx={ {
          backgroundImage: `url(${backImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } } />
        <Grid item xs={ 12 } sm={ 8 } md={ 5 } component={ Paper } elevation={ 6 } square>
          <Box sx={ {
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }>
            <img src={ logo } style={ { height: '100px', marginBottom: '20px' } } className='logo' alt="logo" />
            <Typography component="h2" variant="h6" sx={ { fontFamily: "Roboto Helvetica Arial sans-serif Ubuntu" } }>
              Welcome, please sign in using your credentials
            </Typography>
            <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 1, marginTop: '-10px' } }>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email or UserName"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="domain"
                label="Domain"
                id="domainName"
                onChange={ (e) => { settype(e.target.value); console.log(type); } }
              />
              <FormControlLabel
                control={ <Checkbox value="remember" style={ { color: "#457B9D" } } /> }
                label="Remember me"
              />
              <Button className='submit' type="submit" fullWidth variant="contained"
                onClick={ () => { navigate("/" + type); } }
                sx={ {
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#1D3557',
                  font: 'sans-serif',
                  fontFamily: 'sans-serif',
                  '&:hover': {
                    backgroundColor: '#457B9D',
                    boxShadow: 'none',
                  },
                } }
              >
                <Typography style={ { fontFamily: 'sans-serif ' } }>
                  Sign In
                </Typography>
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2"
                    sx={ { color: '#1D3557', float: 'right', textDecoration: 'none', fontFamily: 'sans-serif', '&:hover': { color: '#457B9D' } } }>
                    Forgot Password?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={ { mt: 5 } } />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
