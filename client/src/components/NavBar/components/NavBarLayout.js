import React from "react";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";

import styles from "./styles";

const NavBarLayout = ({ classes, userName }) => {
  return (
    <AppBar position="fixed" color="inherit" className={classes.navBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Avatar>A</Avatar>
          <Typography className={classes.userName}>{userName}</Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(withStyles(styles)(NavBarLayout));
