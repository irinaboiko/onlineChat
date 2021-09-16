import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Grid, Typography, withStyles } from "@material-ui/core";

import styles from "./styles";

const Message = ({
  classes,
  messageUserName,
  userName,
  messageContent,
  createdAt,
}) => {
  return (
    <Grid
      container
      className={`${classes.messageBlock} ${
        userName !== messageUserName && classes.interlocutor
      }`}
    >
      <Typography className={classes.createdAt}>{createdAt}</Typography>
      <Box
        className={`${classes.messageWrapper} ${
          userName !== messageUserName && classes.grayBackground
        }`}
      >
        <Grid container alignItems="center" className={classes.userInfo}>
          <Avatar>A</Avatar>
          <Typography className={classes.userName}>
            {messageUserName}
          </Typography>
        </Grid>
        {messageContent}
      </Box>
    </Grid>
  );
};

Message.propTypes = {
  userName: PropTypes.string.isRequired,
  messageContent: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default React.memo(withStyles(styles)(Message));
