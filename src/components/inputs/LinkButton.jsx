import React from "react";
import classes from "./LinkButton.module.css";

const LinkButton = ({ text, onClick }) => {
  return (
    <button className={classes["link-btn"]} onClick={onClick}>
      {text}
    </button>
  );
};

export default LinkButton;
