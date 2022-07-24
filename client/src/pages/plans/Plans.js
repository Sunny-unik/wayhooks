import React from 'react'
import PriceCard from "../../components/priceCard/PriceCard"
import { Toolbar } from "@mui/material";
import LandingNav from "../../components/landingNav/LandingNav";
import Grid from '@mui/material/Grid';

function Plans() {
  return (
    <React.Fragment>
      <LandingNav />
      <Toolbar />
      <Toolbar />
      <br/>
      <Grid container alignItems="center" justifyContent="center" spacing={ 3 }>
      <Grid  sx={ {
              '@media only screen and (min-width:400px)': {
                alignItems: "center", justify: "center"
              }
            } }
            item >
        <PriceCard planName='Basic Plan' planPrice='2,999' planDuration='month' planEmployeeLength='20'  />
        </Grid>
        <Grid  sx={ {
              '@media only screen and (min-width:400px)': {
                alignItems: "center", justify: "center"
              }
            } }
            item >
        <PriceCard planName='Standard Plan' planPrice='3,999' planDuration='month' planEmployeeLength='30'  />
        </Grid>
        <Grid  sx={ {
              '@media only screen and (min-width:400px)': {
                alignItems: "center", justify: "center"
              }
            } }
            item >
         <PriceCard planName='Premium Plan' planPrice='5,999' planDuration='month' planEmployeeLength='50+' />
        </Grid>
      </Grid>
    </React.Fragment>

  )
}
export default Plans