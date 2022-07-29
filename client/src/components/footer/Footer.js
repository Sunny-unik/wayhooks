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
import MailTwoTone from '@mui/icons-material/MailTwoTone';
import SendAndArchiveTwoTone from '@mui/icons-material/SendAndArchiveTwoTone';
import FacebookTwoTone from '@mui/icons-material/FacebookTwoTone';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Copyright from '../copyright/Copyright';

export default function Footer() {
  const footerDetails = {
    resources: ['Team', 'Feedback', 'Contact us', 'Locations', 'Privacy policy', 'Terms of use'],
    joinUs: [
      <FacebookTwoTone sx={{ '&:hover': { color: '#E63946' } }} />,
      <Instagram sx={{ '&:hover': { color: '#E63946' } }} />,
      <Twitter sx={{ '&:hover': { color: '#E63946' } }} />,
      <LinkedIn sx={{ '&:hover': { color: '#E63946' } }} />,
    ],
  };
  const [Email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [barMsg, setbarMsg] = useState('Subscribed Successfully');
  const [transition, setTransition] = useState(undefined);

  const TransitionTop = props => <Slide {...props} direction='down' />;

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
        maxWidth='md'
        component='footer'
        sx={{
          '@media only screen and (max-width:399px)': {
            width: '100vw',
            marginX: 0,
            paddingX: 0,
            overflowX: 'hidden',
          },
          borderTop: '1px solid #457B9D',
          mt: 8,
          py: [2, 4],
        }}
      >
        <Grid container spacing={4} justifyContent='space-evenly' sx={{ margin: 'auto' }}>
          <Grid item xs={6} sm={3} key='resources'>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Resources
            </Typography>
            <ul>
              {footerDetails.resources.map(item => (
                <li key={item}>
                  <Link href='#' variant='subtitle1' color='text.secondary' sx={{ '&:hover': { color: '#457B9D' } }}>
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
              {footerDetails.joinUs.map((icons, index) => (
                <li key={index}>
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
            <FormControl sx={{ m: 1, width: '90%', px: 0 }}>
              <InputLabel htmlFor='outlined-adornment-email'>Email</InputLabel>
              <OutlinedInput
                id='outlined-adornment-email'
                value={Email}
                label='Email'
                sx={{
                  marginX: 0,
                  '@media only screen and (max-width:399px)': {
                    width: '90%',
                  },
                }}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position='start'>
                    <MailTwoTone sx={{ color: '#457B9D' }} />
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
        <Copyright sx={{ mt: 1 }} />
      </Container>
    </>
  );
}
