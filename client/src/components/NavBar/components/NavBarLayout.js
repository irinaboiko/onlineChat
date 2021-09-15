import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Avatar,
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

NavBarLayout.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default React.memo(withStyles(styles)(NavBarLayout));
