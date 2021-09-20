import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Grid, Typography, withStyles } from "@material-ui/core";

import styles from "./styles";

const Message = ({
  classes,
  userId,
  messageUserId,
  messageUserImage,
  messageUserName,
  messageContent,
  createdAt,
}) => {
  return (
    <Grid
      container
      className={`${classes.messageBlock} ${
        userId !== messageUserId && classes.interlocutor
      }`}
    >
      <Typography className={classes.createdAt}>{createdAt}</Typography>
      <Box
        className={`${classes.messageWrapper} ${
          userId !== messageUserId && classes.grayBackground
        }`}
      >
        <Grid container alignItems="center" className={classes.userInfo}>
          <Avatar src={messageUserImage} />
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
  userId: PropTypes.string.isRequired,
  messageUserId: PropTypes.string.isRequired,
  messageUserImage: PropTypes.string.isRequired,
  messageUserName: PropTypes.string.isRequired,
  messageContent: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default React.memo(withStyles(styles)(Message));
