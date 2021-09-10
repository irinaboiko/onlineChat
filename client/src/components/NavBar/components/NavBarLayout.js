import React from "react";
import { AppBar, Button, Grid, Toolbar, withStyles } from "@material-ui/core";

import styles from "./styles";

const NavBarLayout = ({ classes }) => {
  return (
    <AppBar position="fixed" color="inherit" className={classes.navBar}>
      <Toolbar>
        <Grid container justify={"flex-end"}>
          <Button onClick={() => console.log("Войти")} variant={"outlined"}>
            Войти
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(withStyles(styles)(NavBarLayout));
