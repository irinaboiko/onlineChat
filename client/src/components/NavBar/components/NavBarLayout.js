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

import LogoutGoogle from "../../LogoutGoogle/LogoutGoogle";

import styles from "./styles";

const NavBarLayout = ({ classes, userName, userImage }) => {
  return (
    <AppBar position="fixed" color="inherit" className={classes.navBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Avatar src={userImage} />
          <Typography className={classes.userName}>{userName}</Typography>
        </Grid>
        <LogoutGoogle />
      </Toolbar>
    </AppBar>
  );
};

NavBarLayout.propTypes = {
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
};

export default React.memo(withStyles(styles)(NavBarLayout));
