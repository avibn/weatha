import React from "react";
import classes from "./TextInput.module.css";

const TextInput = ({ placeholder, value, setState = () => {} }) => {
  return (
    <input
      type="text"
      className={classes["text-input-area"]}
      placeholder={placeholder}
      onChange={(event) => setState(event.target.value)}
      value={value}
    />
  );
};

export default TextInput;
