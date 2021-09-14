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
  connectionMessage: {
    textAlign: "center",
    margin: "10px 0",
  },
  messageBlock: {
    flexShrink: 0,
  },
});

export default styles;
