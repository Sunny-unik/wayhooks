import React from 'react';
import PriceCard from '../../components/priceCard/PriceCard';
import { Toolbar } from '@mui/material';
import LandingNav from '../../components/landingNav/LandingNav';
import Grid from '@mui/material/Grid';
import Footer from '../../components/footer/Footer';

function Plans() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '2,999',
      duration: '1 month',
      employeeLength: '20',
    },
    {
      name: 'Standard Plan',
      price: '3,999',
      duration: '1 month',
      employeeLength: '30',
    },
    {
      name: 'Premium Plan',
      price: '5,999',
      duration: '1 month',
      employeeLength: '50+',
    },
  ];

  return (
    <React.Fragment>
      <LandingNav />
      <Toolbar />
      <Toolbar />
      <br />
      <Grid container alignItems='center' justifyContent='center' spacing={3}>
        {plans.map((plan, index) => {
          return (
            <Grid
              sx={{
                '@media only screen and (min-width:400px)': {
                  alignItems: 'center',
                  justify: 'center',
                },
              }}
              item
              key={index}
            >
              <PriceCard
                planName={plan.name}
                planPrice={plan.price}
                planDuration={plan.duration}
                planEmployeeLength={plan.employeeLength}
              />
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
export default Plans;
