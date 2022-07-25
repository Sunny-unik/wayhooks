import { Typography } from '@mui/material';
import React from 'react';
import { Link as NavLink, useLocation } from 'react-router-dom';

export default function Copyright(props) {
  const location = useLocation();

  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      Copyright ©&nbsp;
      <NavLink
        to='/'
        style={{ textDecoration: 'none', color: '#1D3557' }}
        sx={{ '&:hover': { color: '#457B9D' } }}
        onClick={() => {
          location.pathname === '/' && document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        onMouseEnter={e => (e.target.style.color = '#457B9D')}
        onMouseLeave={e => (e.target.style.color = '#1D3557')}
      >
        Wayhooks
      </NavLink>
      &nbsp; 2022.
    </Typography>
  );
}
