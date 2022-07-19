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
  const navItems = ['Plans', 'Login', 'Signup'];
  const navLinks = ['/plans', '/login', '/signup'];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={ handleDrawerToggle } sx={ { textAlign: 'center' } }>
      <Typography variant="h6" sx={ { my: 2, color: '#1D3557' } }>
        <NavLink key="root" to="/" style={ { textDecoration: "none" } }>
          <img src={ logo } alt={ logo } height="50rem" width="50rem" />
        </NavLink>
      </Typography>
      <Divider />
      <List>
        { navItems.map((item, index) => (
          <NavLink key={ item } to={ navLinks[index] } style={ { textDecoration: "none" } }>
            <ListItem disablePadding>
              <ListItemButton sx={ { textAlign: 'center', color: '#1D3557', fontFamily: "roboto", fontSize: "1.2rem", fontWeight: 700 } }>
                <ListItemText primary={ item } />
              </ListItemButton>
            </ListItem>
          </NavLink>
        )) }
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
          <Typography variant="h6" component="div" sx={ { flexGrow: 1, display: { xs: 'none', sm: 'block' } } }>
            <NavLink key="root" to="/" style={ { color: "#1D3557", textDecoration: "none" } }>
              <img src={ logo } className="logo" alt="wayhooks" height="50rem" width="64rem" />
            </NavLink>
          </Typography>
          <Box sx={ { display: { xs: 'none', sm: 'block' } } }>
            { navItems.map((item, index) => (
              <NavLink className={ ({ isActive }) => isActive ? "active" : "" } to={ navLinks[index] } key={ item } style={ { textDecoration: "none" } }>
                <Button sx={ { color: '#1D3557', fontFamily: "roboto", fontSize: "1.2rem", fontWeight: 700 } }>
                  { item }
                </Button>
              </NavLink>
            )) }
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