import React, { useState } from "react";
import UIButton from "../UIButton/UIButton.tsx";
import "./welcome-form.scss";

const WelcomeForm: React.FC = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(username.trim());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="welcome-form">
      <label htmlFor="username">Write your name</label>
      <input
        id="username"
        placeholder="My name is"
        name="username"
        type="text"
        autoComplete="off"
        value={username}
        onChange={handleChange}
      />
      <UIButton text="submit" />
    </form>
  );
};

export default WelcomeForm;
