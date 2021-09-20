import React, { useState } from "react";

import ChatContainer from "./components/Chat/containers/ChatContainer";

import "./App.css";

export const userDetailsContext = React.createContext(null);
export const isAuthContext = React.createContext(false);

const App = () => {
  const [userDetails, setUserDetails] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  return (
    <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
      <isAuthContext.Provider value={[isAuth, setIsAuth]}>
        <div className="appWrapper">
          <ChatContainer />
        </div>
      </isAuthContext.Provider>
    </userDetailsContext.Provider>
  );
};

export default App;
