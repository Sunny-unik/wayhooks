import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DoneIcon from '@mui/icons-material/Done';
export default function PriceCard(props) {
  return (
    <React.Fragment>
            <Card sx={ {
              '@media only screen and (min-width:400px)': {
                height: '4.5in',
                minWidth: '18rem',
                marginBottom: '2rem',
                borderColor: 'black',
                boxShadow: '3px 3px 3px 3px grey',
                transition: 'transform 0.4s',
                "&:hover":{
                  transform: 'scale(1.2)'
                }

              },
              '@media only screen and (max-width:399px)': {
                height: '4.5in',
                minWidth: '18rem',
                borderColor: 'black',
                marginBottom: '2rem',
                boxShadow: '3px 3px 3px 3px grey',
             
              }
            }
            }>
              <CardContent>
                <Typography sx={ { fontSize: 19, textAlign: 'center', fontWeight: 'bold', color: '#1D3557', fontFamily: 'Arial' } } gutterBottom>
                  { props.planName }
                </Typography>
                <Divider sx={ { backgroundColor: 'black', height: '1.4px', color: '#1D3557' } } />
                <br /><br />
                <Typography variant="h4" component="div" sx={ { textAlign: 'center' } }>
                  <CurrencyRupeeIcon sx={ { fontSize: 'large' } } />
                  { props.planPrice }
                  <Typography component='span'>/{ props.planDuration }</Typography>
                  <Typography component='div' sx={ { fontSize: '1rem' } } >(Up to { props.planEmployeeLength } Employees)</Typography>
                </Typography>
                <br />
                <Divider />
                <br />
                <Typography sx={ { fontFamily: "sans-serif", textAlign: 'center', fontWeight: '300', textDecoration: 'underline 1px solid grey', textUnderlineOffset: '2px' } }>Features Included </Typography>
                <ul style={ { listStyle: 'none' } }>
                  <li><DoneIcon style={ { fontSize: '20px', fontWeight: 'bold' } } />Flexible Benefits Plan</li>
                  <li><DoneIcon style={ { fontSize: '20px', fontWeight: 'bold' } } />Shift Management</li>
                  <li><DoneIcon style={ { fontSize: '20px', fontWeight: 'bold' } } />Single Sign On</li>
                </ul>
                <CardActions sx={ { justifyContent: 'center' } }><Button variant="contained" sx={ { width: '9rem',backgroundColor:'#1D3557'  }}>Buy Now</Button></CardActions>
              </CardContent>
            </Card>
    </React.Fragment>

  );
}
