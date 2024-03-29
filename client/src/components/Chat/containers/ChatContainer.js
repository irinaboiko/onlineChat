import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

import ChatLayout from "../components/ChatLayout";
import LoginGoogle from "../../LoginGoogle/LoginGoogle";
import { isAuthContext, userDetailsContext } from "../../../App";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState("");
  const socket = useRef();

  const [userDetails, setUserDetails] = useContext(userDetailsContext);
  const [isAuth, setIsAuth] = useContext(isAuthContext);

  const handleMessageChange = useCallback(
    (event) => {
      setMessageValue(event.target.value);
    },
    [messageValue]
  );

  useEffect(() => {
    const HOSTNAME = window.location.hostname;
    const HREF = window.location.href;
    socket.current = new WebSocket(`ws://${HOSTNAME}:5000`, {
      origin: HREF,
      headers: { Authorization: "base64 auth" },
    });

    //const HOST = window.location.origin.replace(/^http/, "ws");
    //socket.current = new WebSocket(HOST);

    socket.current.onopen = () => {
      console.log("Socket started");
    };

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevState) => [message, ...prevState]);
    };

    socket.current.onclose = () => {
      console.log("Socket closed");
    };

    socket.current.onerror = () => {
      console.log("Socket was an error");
    };
  }, []);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const currentDate = Date.now();

    const message = {
      userName: userDetails.name,
      userId: userDetails.googleId,
      userImage: userDetails.imageUrl,
      message: messageValue,
      id: uuid(),
      createdAtForSort: currentDate,
      createdAt: new Date(currentDate).toLocaleString(),
    };
    socket.current.send(JSON.stringify(message));
    setMessageValue("");
  };

  const isSendMessageButtonDisabled = useMemo(
    () => !messageValue.trim(),
    [messageValue]
  );

  messages.sort((a, b) => a.createdAtForSort - b.createdAtForSort);

  return isAuth ? (
    <ChatLayout
      userName={userDetails.name}
      userId={userDetails.googleId}
      userImage={userDetails.imageUrl}
      messageValue={messageValue}
      messages={messages}
      handleSendMessage={handleSendMessage}
      handleMessageChange={handleMessageChange}
      isSendMessageButtonDisabled={isSendMessageButtonDisabled}
    />
  ) : (
    <LoginGoogle />
  );
};

export default ChatContainer;
