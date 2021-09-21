import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { Typography, withStyles } from "@material-ui/core";

import { refreshTokenSetup } from "../../utils/refreshToken";
import { isAuthContext, userDetailsContext } from "../../App";

import styles from "./styles";

const clientId = `${process.env.REACT_APP_CLIENT_ID}.apps.googleusercontent.com`;

const LoginGoogle = ({ classes }) => {
  const [userDetails, setUserDetails] = useContext(userDetailsContext);
  const [isAuth, setIsAuth] = useContext(isAuthContext);

  const onSuccess = (response) => {
    console.log("Login Success");

    setUserDetails(response.profileObj);
    setIsAuth(true);

    //initialize the setup
    refreshTokenSetup(response);
  };

  const onFailure = (response) => {
    console.log("Login failed, response:", response);
  };

  return (
    <div className={classes.loginWrapper}>
      <Typography variant="h4" className={classes.title}>
        Добро пожаловать!
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        Для продолжения, пожалуйста, авторизируйтесь
      </Typography>
      <GoogleLogin
        clientId={clientId}
        buttonText="Войти"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default React.memo(withStyles(styles)(LoginGoogle));
