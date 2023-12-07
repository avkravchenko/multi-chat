import React, { useEffect, useState } from "react";
import "./display.scss";
import { io, Socket } from "socket.io-client";
import Message from "../message/Message.tsx";
import useName from "../../store/name/name.ts";
import useAllMessages from "../../store/allMessages/allMessages";

const socket: Socket = io("http://localhost:5001");

type Props = {};

type User = {
  username: string;
  id: string;
};

const Display = (props: Props) => {
  const { username, id } = useName((state) => state);
  const [userJoin, setUserJoin] = useState<User[]>([]);
  const allMessages = useAllMessages((state) => state.allMessages);
  const addMessage = useAllMessages((state) => state.addMessage);

  useEffect(() => {
    socket.emit("join", { username, id });
    console.log(1);
  }, []);

  useEffect(() => {
    socket.on("eventClient", (data) => {
      console.log(data);
      setUserJoin((prev) => [...prev, data]);
    });
  }, []);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      addMessage(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="display">
      {allMessages.map((data) => {
        return (
          <Message
            key={crypto.randomUUID()}
            name={data.currentUser.username}
            message={data.message}
          />
        );
      })}
      {userJoin.length > 0 ? (
        <p>{`${userJoin[userJoin.length - 1].username} has join the chat`}</p>
      ) : null}
    </div>
  );
};

export default Display;
