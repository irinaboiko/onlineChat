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

import Message from "../../../../commonComponents/Message";
import NavBarLayout from "../../../NavBar/components/NavBarLayout";
import ScrollToBottom from "../../../../commonComponents/ScrollToBottom/ScrollToBottom";

import styles from "./styles";

const ChatLayout = ({
  classes,
  userName,
  userId,
  userImage,
  messageValue,
  handleMessageChange,
  messages,
  handleSendMessage,
  isSendMessageButtonDisabled,
}) => {
  return (
    <>
      <NavBarLayout userName={userName} userImage={userImage} />
      <Container className={classes.chatWrapper}>
        <Box className={classes.chatBlockWrapper}>
          <Box className={classes.chatBlock}>
            {messages.map((message) => {
              return (
                <Message
                  key={message.id}
                  userId={userId}
                  messageUserImage={message.userImage}
                  messageUserId={message.userId}
                  messageUserName={message.userName}
                  messageContent={message.message}
                  createdAt={message.createdAt}
                />
              );
            })}
            <ScrollToBottom />
          </Box>

          <form onSubmit={handleSendMessage}>
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
                disabled={isSendMessageButtonDisabled}
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
  userId: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  handleMessageChange: PropTypes.func.isRequired,
  messages: PropTypes.array,
  handleSendMessage: PropTypes.func.isRequired,
  isSendMessageButtonDisabled: PropTypes.bool.isRequired,
};

export default React.memo(withStyles(styles)(ChatLayout));
