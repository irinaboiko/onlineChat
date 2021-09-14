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
import Message from "../../../../commonComponents/Message";
import NavBarLayout from "../../../NavBar/components/NavBarLayout";

const interlocutor = true;

const ChatLayout = ({
  classes,
  userName,
  messageValue,
  handleMessageChange,
  messages,
  sendMessage,
  disabledSendMessageButton,
}) => {
  return (
    <>
      <NavBarLayout userName={userName} />
      <Container className={classes.chatWrapper}>
        <Grid container className={classes.chatBlockWrapper}>
          <Grid
            className={classes.chatBlock}
            container
            direction="column"
            //justifyContent="flex-end"
          >
            {messages?.map((message) => {
              console.log(message);
              return message.event === "connection" ? (
                <div key={message.id} className={classes.connectionMessage}>
                  Пользовательн {message.userName} авторизован
                </div>
              ) : (
                <Message
                  key={message.id}
                  userName={message.userName}
                  messageContent={message.message}
                />
              );
            })}
          </Grid>
          <form onSubmit={sendMessage}>
            <Grid
              container
              className={classes.messageBlock}
              direction="column"
              alignItems="flex-end"
            >
              <TextField
                fullWidth
                rowsMax={2}
                variant={"outlined"}
                value={messageValue}
                onChange={handleMessageChange}
              />
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                disabled={disabledSendMessageButton}
              >
                Отправить
              </Button>
            </Grid>
          </form>
        </Grid>
      </Container>
    </>
  );
};

ChatLayout.propTypes = {};

export default React.memo(withStyles(styles)(ChatLayout));
