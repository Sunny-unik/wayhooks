import { Toolbar } from '@mui/material';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import LandingNav from '../../components/landingNav/LandingNav';
import './notFound.css';

export default function NotFound() {
  return (
    <>
      <LandingNav />
      <Toolbar />
      <Toolbar />
      <div class='notFoundMainbox'>
        <div class='err'>4</div>
        <i class='far fa-question-circle fa-spin'></i>
        <div class='err2'>4</div>
        <div class='msg'>
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
          <p>
            Let's go&nbsp;
            <NavLink to='/'>Home</NavLink>
            &nbsp;and try from there.
          </p>
        </div>
      </div>
    </>
  );
}
