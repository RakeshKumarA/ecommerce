import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  icon: {
    marginLeft: '20px',
  },
  headerbgc: {
    background: '#001e39',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.headerbgc}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          className={classes.icon}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Samsung</MenuItem>
          <MenuItem onClick={handleClose}>LG</MenuItem>
          <MenuItem onClick={handleClose}>IPhone</MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          Mobile Incubator
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton edge="start" color="inherit" className={classes.icon}>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
