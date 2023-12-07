import React from "react";
import "../message/message.scss";
import useName from "../../store/name/name.ts";

type Props = {
  name: string;
  message: string;
};

const Message = (props: Props) => {
  const username = useName((state) => state.username);
  const isCurrentUser = username === props.name;

  return (
    <div className={`message ${isCurrentUser ? "align-right" : ""}`}>
      <span className="name">{props.name}</span>
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
