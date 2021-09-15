import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, TextField, withStyles } from "@material-ui/core";

import styles from "./styles";

const LogInLayout = ({
  classes,
  userName,
  handleUserNameChange,
  connect,
  disabledLogInButton,
}) => {
  return (
    <form onSubmit={connect} className={classes.form}>
      <Grid
        container
        className={classes.formWrapper}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          className={classes.input}
          variant="outlined"
          value={userName}
          onChange={handleUserNameChange}
          placeholder="Как тебя зовут?"
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          disabled={disabledLogInButton}
        >
          Отправить
        </Button>
      </Grid>
    </form>
  );
};

LogInLayout.propTypes = {
  userName: PropTypes.string.isRequired,
  handleUserNameChange: PropTypes.func.isRequired,
  connect: PropTypes.func.isRequired,
  disabledLogInButton: PropTypes.bool.isRequired,
};

export default React.memo(withStyles(styles)(LogInLayout));
