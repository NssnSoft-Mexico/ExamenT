import React from 'react';
import '../Header/Header.css';
import { useDispatch } from "react-redux";
import { Logout } from '@mui/icons-material';
import { Nav, Navbar } from 'react-bootstrap';
import { logout } from "../../actions/auth";
import { Box, Toolbar, AppBar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


function ResponsiveAppBar () {

  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout());
        localStorage.removeItem('user');
  };
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
            AVT Tour
          </Typography>
          <Button component={Link} to="/login" color="inherit" onClick={logOut}>Cerrar Sesion</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;