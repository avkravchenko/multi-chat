import React from "react";
import "../message/message.scss";
// import useName from "../../store/name/name.ts";
// import useMessageStore from "../../store/messageText/messageText.ts";

type Props = {
  name: string;
  message: string;
};

const Message = (props: Props) => {
  return (
    <div className="message">
      <span className="name">{props.name}</span>
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
