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
import Message from "../../../../commonComponents/Message";
import NavBarLayout from "../../../NavBar/components/NavBarLayout";
import ScrollToBottom from "../../../../commonComponents/ScrollToBottom/ScrollToBottom";

const ChatLayout = ({
  classes,
  userName,
  messageValue,
  handleMessageChange,
  messages,
  sendMessage,
  disabledSendMessageButton,
  messagesBottom,
  chatBlock,
}) => {
  return (
    <>
      <NavBarLayout userName={userName} />
      <Container className={classes.chatWrapper}>
        <Box className={classes.chatBlockWrapper}>
          <Box className={classes.chatBlock} ref={chatBlock}>
            {messages.map((message) => {
              return (
                <Message
                  key={message.id}
                  messageUserName={message.userName}
                  userName={userName}
                  messageContent={message.message}
                  createdAt={message.createdAt}
                />
              );
            })}

            <ScrollToBottom />
          </Box>
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
        </Box>
      </Container>
    </>
  );
};

ChatLayout.propTypes = {
  userName: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  handleMessageChange: PropTypes.func.isRequired,
  messages: PropTypes.array,
  sendMessage: PropTypes.func.isRequired,
  disabledSendMessageButton: PropTypes.bool.isRequired,
};

export default React.memo(withStyles(styles)(ChatLayout));
