const styles = () => ({
  chatWrapper: {
    height: "100%",
    padding: "64px 0 20px",
  },
  chatBlockWrapper: {
    height: "100%",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  chatBlock: {
    backgroundColor: "#e0e0e0",
    //flex: "1 0 auto",
    height: "calc(100vh - 176px)",
    flexWrap: "nowrap",
    overflow: "hidden",
    overflowY: "auto",
  },
  messageWrapper: {
    fontSize: 14,
    backgroundColor: " #83a3d4",
    borderRadius: 5,
    width: "fit-content",
    maxWidth: "40%",
    padding: 10,
    margin: 10,
    alignSelf: "flex-end",
  },
  interlocutor: {
    backgroundColor: "#a9a9a9",
    alignSelf: "flex-start",
  },
  userInfo: {
    marginBottom: 5,
  },
  userName: {
    fontSize: 12,
    marginLeft: 5,
  },
  messageBlock: {
    flexShrink: 0,
  },
});

export default styles;
