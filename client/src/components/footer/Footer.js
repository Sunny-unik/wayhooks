import { Container, CssBaseline, GlobalStyles, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { Link as NavLink, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container
        maxWidth='md'
        component='footer'
        sx={{
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent='space-evenly' sx={{ margin: 'auto' }}>
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant='h6' color='text.primary' gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href='#' variant='subtitle1' color='text.secondary'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
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
