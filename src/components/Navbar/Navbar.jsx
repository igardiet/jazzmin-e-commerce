import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import jm_logo from '../../assets/jazzmin-logo.png'
import navStyles from './styles';

const Navbar = () => {
  const classes = navStyles();
  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit">
          <img src={jm_logo} alt="Jazzmin synthesizers logo" height="60rem" className={classes.image} />
        </Typography>
        <div className={classes.grow}/>
        <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar