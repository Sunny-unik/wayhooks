import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormHelperText,
  GlobalStyles,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Slide,
  Snackbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link as NavLink, useLocation } from 'react-router-dom';
import MailTwoTone from '@mui/icons-material/MailTwoTone';
import SendAndArchiveTwoTone from '@mui/icons-material/SendAndArchiveTwoTone';
import FacebookTwoTone from '@mui/icons-material/FacebookTwoTone';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const footerDetails = {
    resources: ['Team', 'Feedback', 'Contact us', 'Locations', 'Privacy policy', 'Terms of use'],
    joinUs: [<FacebookTwoTone />, <Instagram />, <Twitter />, <LinkedIn />],
  };
  const location = useLocation();
  const [Email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [barMsg, setbarMsg] = useState('Subscribed Successfully');
  const [transition, setTransition] = useState(undefined);

  function TransitionTop(props) {
    return <Slide {...props} direction='top' />;
  }

  const subClick = Transition => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const barClose = (event, reason) => {
    if (reason === 'clickaway') {
      setbarMsg('Already Subscribed');
      return;
    }
    setOpen(false);
  };

  const snackbar = (
    <React.Fragment>
      <IconButton size='small' aria-label='close' color='inherit' onClick={barClose}>
        X
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container
        maxWidth='xl'
        component='footer'
        sx={{
          borderTop: '1px solid #457B9D',
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent='space-evenly' sx={{ margin: 'auto' }}>
          <Grid item xs={6} sm={3} key={'resources'}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Resources
            </Typography>
            <ul>
              {footerDetails.resources.map(item => (
                <li key={item}>
                  <Link href='#' variant='subtitle1' color='text.secondary'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={6} sm={3} key={'joinUs'}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Join Us
            </Typography>
            <ul>
              {footerDetails.joinUs.map(icons => (
                <li key={icons}>
                  <Link href='#' variant='subtitle1' color='text.secondary' sx={{ '&:hover': { paddingLeft: '.2em' } }}>
                    {icons}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={5} key={'subscribe'}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Subscribe to get updated
            </Typography>
            <FormControl sx={{ m: 1, width: '90%' }}>
              <InputLabel htmlFor='outlined-adornment-email'>Email</InputLabel>
              <OutlinedInput
                id='outlined-adornment-email'
                value={Email}
                label='Email'
                onChange={e => {
                  setEmail(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position='start'>
                    <MailTwoTone />
                    &nbsp;
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <Button onClick={subClick(TransitionTop)}>
                      <SendAndArchiveTwoTone />
                    </Button>
                  </InputAdornment>
                }
              />
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={5000}
                onClose={barClose}
                TransitionComponent={transition}
                message={barMsg}
                action={snackbar}
                key={transition}
              />
              <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Typography variant='body2' color='text.secondary' align='center' sx={{ mt: 5 }}>
          {'Copyright © '}
          <NavLink
            to='/'
            style={{ textDecoration: 'none', color: '#1D3557' }}
            onClick={() => {
              location.pathname === '/' && document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Wayhooks
          </NavLink>
          &nbsp;2022.
        </Typography>
      </Container>
    </>
  );
}
