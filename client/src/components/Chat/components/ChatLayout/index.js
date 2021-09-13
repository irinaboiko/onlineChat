import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";

import styles from "./styles";

const interlocutor = true;

const ChatLayout = ({ classes }) => {
  return (
    <Container className={classes.chatWrapper}>
      <Grid container className={classes.chatBlockWrapper}>
        <Grid
          className={classes.chatBlock}
          container
          direction="column"
          //justifyContent="flex-end"
        >
          <Grid
            container
            direction="column"
            className={`${classes.messageWrapper} ${
              interlocutor && classes.interlocutor
            }`}
          >
            <Grid container alignItems="center" className={classes.userInfo}>
              <Avatar>A</Avatar>
              <Typography className={classes.userName}>Name</Typography>
            </Grid>
            Hi Hi Hi Hi Hi Hi
          </Grid>
          <Grid container direction="column" className={classes.messageWrapper}>
            <Grid
              container
              alignItems="center"
              className={`${classes.userInfo}`}
            >
              <Avatar>A</Avatar>
              <Typography className={classes.userName}>Name</Typography>
            </Grid>
            Hi Hi Hi Hi Hi Hi
          </Grid>
          <Grid container direction="column" className={classes.messageWrapper}>
            <Grid
              container
              alignItems="center"
              className={`${classes.userInfo}`}
            >
              <Avatar>A</Avatar>
              <Typography className={classes.userName}>Name</Typography>
            </Grid>
            Hi Hi Hi Hi Hi Hi
          </Grid>
          <Grid container direction="column" className={classes.messageWrapper}>
            <Grid
              container
              alignItems="center"
              className={`${classes.userInfo}`}
            >
              <Avatar>A</Avatar>
              <Typography className={classes.userName}>Name</Typography>
            </Grid>
            Hi Hi Hi Hi Hi Hi
          </Grid>
          <Grid container direction="column" className={classes.messageWrapper}>
            <Grid
              container
              alignItems="center"
              className={`${classes.userInfo}`}
            >
              <Avatar>A</Avatar>
              <Typography className={classes.userName}>Name</Typography>
            </Grid>
            Hi Hi Hi Hi Hi Hi
          </Grid>
          <Grid container direction="column" className={classes.messageWrapper}>
            <Grid
              container
              alignItems="center"
              className={`${classes.userInfo}`}
            >
              <Avatar>A</Avatar>
              <Typography className={classes.userName}>Name</Typography>
            </Grid>
            Hi Hi Hi Hi Hi Hi
          </Grid>
          <Grid container direction="column" className={classes.messageWrapper}>
            <Grid
              container
              alignItems="center"
              className={`${classes.userInfo}`}
            >
              <Avatar>A</Avatar>
              <Typography className={classes.userName}>Name</Typography>
            </Grid>
            Hi Hi Hi Hi Hi Hi
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.messageBlock}
          direction="column"
          alignItems="flex-end"
          //style={{width: '80%'}}
        >
          <TextField
            fullWidth
            rowsMax={2}
            variant={"outlined"}
            //value={value}
            //onChange={e => setValue(e.target.value)}
          />
          <Button
            //onClick={sendMessage}
            variant={"outlined"}
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

ChatLayout.propTypes = {};

export default React.memo(withStyles(styles)(ChatLayout));
