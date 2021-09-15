import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Grid,
  TextField,
  withStyles,
} from "@material-ui/core";

import styles from "./styles";
import Message from "../../../../commonComponents/Message";
import NavBarLayout from "../../../NavBar/components/NavBarLayout";

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
          <Grid className={classes.chatBlock} container direction="column">
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

ChatLayout.propTypes = {
  userName: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  handleMessageChange: PropTypes.func.isRequired,
  messages: PropTypes.array,
  sendMessage: PropTypes.func.isRequired,
  disabledSendMessageButton: PropTypes.bool.isRequired,
};

export default React.memo(withStyles(styles)(ChatLayout));
