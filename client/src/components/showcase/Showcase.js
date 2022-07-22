import { Box, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from 'react';

export default function Showcase() {
  return (
    <Box component="main" sx={ { p: 3, textAlign: "center" } }>
      <Toolbar />
      <Container >
        <Typography variant={ "h3" } sx={ { fontWeight: 700, color: "#1D3557", my: "2rem", fontFamily: "sans-serif" } }>
          Payroll crafted for building a better workplace
        </Typography>
        <Typography variant={ "h6" } sx={ { fontWeight: 600, my: "1rem", fontFamily: "Nunito Sans" } }>
          Spend less time running payroll for your employees so you can focus on growing your business.
        </Typography>
        <img src={ require("../../assets/images/dashboardBg.png") } alt="demoDashboard" width="1000em" loading="lazy" />
      </Container>
    </Box>
  );
}
