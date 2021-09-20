import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { isAuthContext } from "../../App";

const clientId = `${process.env.REACT_APP_CLIENT_ID}.apps.googleusercontent.com`;

const LogoutGoogle = () => {
  const [isAuth, setIsAuth] = useContext(isAuthContext);

  const onSuccess = () => {
    setIsAuth(false);

    console.log("Logout successful");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Выйти"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

LogoutGoogle.propTypes = {};

export default React.memo(LogoutGoogle);
