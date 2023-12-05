import React from "react";
import "./messege-input.scss";
import UIButton from "../UIButton/UIButton.tsx";

type Props = {};

const MessegeInput = (props: Props) => {
  return (
    <div className="messege-input-wrapper">
      <input
        className="messege-input"
        type="text"
        placeholder="type your messege here"
      />
      <UIButton text="send" />
    </div>
  );
};

export default MessegeInput;
