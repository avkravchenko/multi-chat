import React from "react";
import "./display.scss";
import Messege from "../messege/Messege.tsx";
type Props = {};

const Display = (props: Props) => {
  return (
    <div className="display">
      <Messege />
    </div>
  );
};

export default Display;
