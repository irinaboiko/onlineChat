import React from "react";
import { withStyles } from "@material-ui/core";

import NavBarLayout from "./components/NavBar/components/NavBarLayout";
import ChatContainer from "./components/Chat/containers/ChatContainer";

import "./App.css";

const App = () => {
  return (
    <div className="appWrapper">
      <NavBarLayout />
      <ChatContainer />
    </div>
  );
};

export default App;
