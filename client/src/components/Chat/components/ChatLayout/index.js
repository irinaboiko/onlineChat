import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  withStyles,
} from "@material-ui/core";

import styles from "./styles";

const ChatLayout = ({ classes }) => {
  return (
    <Container className={classes.chatWrapper}>
      <Grid container className={classes.chatBlockWrapper}>
        <Box className={classes.chatBlock}></Box>
        <Grid
          container
          className={classes.messageBlock}
          direction={"column"}
          alignItems={"flex-end"}
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
