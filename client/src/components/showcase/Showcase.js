import { Box, Card, CardContent, Grid, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import CurrencyRupeeTwoTone from '@mui/icons-material/CurrencyRupeeTwoTone';
import AccountTreeTwoTone from '@mui/icons-material/AccountTreeTwoTone';
import PriceCheckTwoTone from '@mui/icons-material/PriceCheckTwoTone';
import ShieldTwoTone from '@mui/icons-material/ShieldTwoTone';
import GroupsTwoTone from '@mui/icons-material/GroupsTwoTone';
import SupervisorAccountTwoTone from '@mui/icons-material/SupervisorAccountTwoTone';

export default function Showcase() {
  const girdIcons = [
    CurrencyRupeeTwoTone,
    AccountTreeTwoTone,
    PriceCheckTwoTone,
    ShieldTwoTone,
    GroupsTwoTone,
    SupervisorAccountTwoTone,
  ];
  const girdTitle = [
    'Automatic payroll calculation',
    'Embrace diverse salary structures',
    'Pay employees on time every time',
    'Straight-forward statutory compliance',
    'Encourage employee self-service',
    'Fine-grain admin privileges',
  ];
  const girdContent = [
    'Run payroll in a few clicks and automatically generate pay-slips online with a thorough breakdown of taxes, allowances, and deductions.',
    'Create multiple pay slabs for your staff, leads, and managers and associate the right template with each employee.',
    'Transfer employees salaries directly to their bank accounts with timely online transfers and readily available bank advice.',
    'Steer your business clear of compliance penalties. We handle your statutory compliance including (PF,PT,ESI,LWF and IT) and make filing easy with tax reports.',
    'Enable seamless collaboration between employees and your payroll staff and reduce the burden of employee requests.',
    'Invite your qualified staff to process payroll but maintain control with user roles and role-based access.',
  ];

  return (
    <>
      <Toolbar />
      <Container component='main' sx={{ p: 3, textAlign: 'center' }}>
        {/* Starting Content */}
        <Typography variant={'h3'} sx={{ fontWeight: 700, color: '#1D3557', my: '2rem', fontFamily: 'sans-serif' }}>
          Payroll crafted for building a better workplace
        </Typography>
        <Typography variant={'h6'} sx={{ fontWeight: 600, my: '1rem', fontFamily: 'Nunito Sans' }}>
          Spend less time running payroll for your employees so you can focus on growing your business.
        </Typography>
        {/* Showcase Image */}
        <img src={require('../../assets/images/dashboardBg.png')} alt='demoDashboard' width='100%' loading='lazy' />
      </Container>
      {/* Showcase cards inside grid  */}
      <Container maxWidth='lg'>
        <Grid container p={3} justifyContent='center' spacing={2}>
          {girdIcons.map((icons, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
                <Card
                  variant={'elevation'}
                  sx={{
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <Box
                    component={icons}
                    sx={{
                      color: 'info.dark',
                      fontSize: 40,
                      verticalAlign: 'sub',
                      marginX: '.5em',
                      marginTop: '.5em',
                      backgroundColor: '#A8DADC',
                      borderRadius: '5px',
                      padding: '.2em',
                    }}
                  />
                  <CardContent>
                    <Typography variant='h5' component='h2' sx={{ fontSize: 24, fontWeight: 'medium' }}>
                      {girdTitle[index]}
                    </Typography>
                    <Typography
                      variant='p'
                      sx={{ display: 'inline', fontWeight: 'medium', mx: 0.5, color: 'text.secondary' }}
                    >
                      {girdContent[index]}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
