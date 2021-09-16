import React, { useCallback, useMemo, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import ChatLayout from "../components/ChatLayout";
import LogInLayout from "../../LogIn/components/LogInLayout";

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState("");
  const [userName, setUserName] = useState("");
  const [connected, setConnected] = useState(false);
  const socket = useRef();

  const handleMessageChange = useCallback(
    (event) => {
      setMessageValue(event.target.value);
    },
    [messageValue]
  );

  const handleUserNameChange = useCallback(
    (event) => {
      setUserName(event.target.value);
    },
    [userName]
  );

  function connect(event) {
    event.preventDefault();

    socket.current = new WebSocket("ws://localhost:5000");

    socket.current.onopen = () => {
      setConnected(true);
    };

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevState) => [message, ...prevState]);
    };

    socket.current.onclose = () => {
      console.log("Socket closed");
      setConnected(false);
    };

    socket.current.onerror = () => {
      console.log("Socket was an error");
    };
  }

  const sendMessage = async (event) => {
    event.preventDefault();

    const currentDate = Date.now();

    const message = {
      userName,
      message: messageValue,
      id: uuid(),
      createdAtForSort: currentDate,
      createdAt: new Date(currentDate).toLocaleString(),
    };
    socket.current.send(JSON.stringify(message));
    setMessageValue("");
  };

  const disabledSendMessageButton = useMemo(
    () => !messageValue.trim(),
    [messageValue]
  );

  const disabledLogInButton = useMemo(() => !userName.trim(), [userName]);

  messages.sort((a, b) => a.createdAtForSort - b.createdAtForSort);

  return connected ? (
    <ChatLayout
      userName={userName}
      messageValue={messageValue}
      handleMessageChange={handleMessageChange}
      messages={messages}
      sendMessage={sendMessage}
      disabledSendMessageButton={disabledSendMessageButton}
    />
  ) : (
    <LogInLayout
      userName={userName}
      handleUserNameChange={handleUserNameChange}
      connect={connect}
      disabledLogInButton={disabledLogInButton}
    />
  );
};

export default ChatContainer;

//TODO: add google authorization
