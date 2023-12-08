import React, { useEffect, useState } from "react";
import "./display.scss";
import { io, Socket } from "socket.io-client";
import Message from "../message/Message.tsx";
import useName from "../../store/name/name.ts";
import useAllMessages from "../../store/allMessages/allMessages";
import useAllUsers from "../../store/allUsers/useAllUsers.ts";

const socket: Socket = io("http://localhost:5001");

const Display = () => {
  const { username, id } = useName((state) => state);
  const users = useAllUsers((state) => state.allUsers);
  const addUser = useAllUsers((state) => state.addUser);
  const allMessages = useAllMessages((state) => state.allMessages);
  const addMessage = useAllMessages((state) => state.addMessage);

  useEffect(() => {
    socket.emit("join", { username, id });
  }, []);

  useEffect(() => {
    socket.on("eventClient", (data) => {
      console.log("user", data);
      addUser(data);
    });
  }, []);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      addMessage(data);
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
            date={data.date}
          />
        );
      })}
      {users.length > 0 ? (
        <p>{`${users[users.length - 1].username} has join the chat`}</p>
      ) : null}
    </div>
  );
};

export default Display;
