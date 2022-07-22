import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../../assets/logo/logo.svg";
import { Link as NavLink } from "react-router-dom";

export default function LandingNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={ handleDrawerToggle } sx={ { textAlign: 'center' } }>
      <Typography variant="h6" sx={ { my: 2, color: '#1D3557' } }>
        <NavLink to="/" style={ { textDecoration: "none" } }>
          <img src={ logo } alt={ logo } height="100rem" width="140rem" />
        </NavLink>
      </Typography>
      <Divider />
      <List>
        <NavLink to={ "/login" } style={ { textDecoration: "none" } }>
          <ListItem disablePadding>
            <ListItemButton sx={ { textAlign: 'center', color: '#1D3557', fontFamily: 'sans-serif', fontSize: "1.2rem", fontWeight: 500 } }>
              <ListItemText primary={ "Login" } />
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={ "/plans" } style={ { textDecoration: "none" } }>
          <ListItem disablePadding>
            <ListItemButton sx={ { textAlign: 'center', color: '#1D3557', fontFamily: 'sans-serif', fontSize: "1.2rem", fontWeight: 500 } }>
              <ListItemText primary={ "Plans" } />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={ { display: 'flex' } }>
      <AppBar component="nav" sx={ { backgroundColor: "#fff" } }>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={ handleDrawerToggle }
            sx={ { mr: 2, display: { sm: 'none' } } } >
            <MenuIcon sx={ { color: "#1D3557" } } />
          </IconButton>
          <Typography variant="h7" component="div" sx={ { flexGrow: 1, display: { xs: 'none', sm: 'block' } } }>
            <NavLink to="/" style={ { color: "#1D3557", textDecoration: "none" } }>
              <img src={ logo } className="logo" alt="wayhooks" height="85rem" width="110rem" sx={ { marginTop: '10px' } } />
            </NavLink>
          </Typography>
          <Box sx={ { display: { xs: 'none', sm: 'block' } } }>
            <NavLink to={ '/login' } style={ { textDecoration: "none" } }>
              <Button sx={ {
                color: '#1D3557', fontFamily: "sans-serif", fontSize: "1.2rem", fontWeight: 500, marginRight: '10px',
                '&:hover': { backgroundColor: '#ffff' },
              } }
              >
                Login
              </Button>
            </NavLink>
            <NavLink to={ '/plans' } style={ { textDecoration: "none" } }>
              <Button sx={ {
                color: '#ffff', backgroundColor: '#1D3557', fontFamily: "sans-serif", fontSize: "1rem", fontWeight: 500, border: '2px solid black', borderRadius: '10px'
                , '&:hover': { backgroundColor: '#457B9D' },
              } }
              >
                Plans
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer container={ container } variant="temporary" open={ mobileOpen } onClose={ handleDrawerToggle }
          ModalProps={ {
            keepMounted: true, // Better open performance on mobile.
          } }
          sx={ {
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          } }
        >
          { drawer }
        </Drawer>
      </Box>
    </Box >
  );
};