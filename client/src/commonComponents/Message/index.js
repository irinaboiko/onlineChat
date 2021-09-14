import React from "react";
import PropTypes from "prop-types";
import { Avatar, Grid, Typography, withStyles } from "@material-ui/core";

import styles from "./styles";

const Message = ({ classes, userName, messageContent }) => {
  return (
    <Grid container direction="column" className={classes.messageWrapper}>
      <Grid container alignItems="center" className={`${classes.userInfo}`}>
        <Avatar>A</Avatar>
        <Typography className={classes.userName}>{userName}</Typography>
      </Grid>
      {messageContent}
    </Grid>
  );
};

Message.propTypes = {};

export default React.memo(withStyles(styles)(Message));
