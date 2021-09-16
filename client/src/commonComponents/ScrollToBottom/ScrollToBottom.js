import { useEffect, useRef } from "react";

const ScrollToBottom = () => {
  const bottomRef = useRef();
  useEffect(() => bottomRef.current.scrollIntoView({ behavior: "smooth" }));
  return <div ref={bottomRef} />;
};

export default ScrollToBottom;
