import React from "react";
import classes from "./TextInput.module.css";

const TextInput = ({ placeholder }) => {
  return (
    <input
      type="text"
      className={classes["text-input-area"]}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
