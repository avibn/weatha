import React from "react";

import classes from "./InfoRow.module.css";

const InfoRow = ({ text, value }) => {
  return (
    <div className={classes["details-box"]}>
      <p className={classes["light-text"]}>{text}</p>
      <p className={classes["number-text"]}>{value}</p>
    </div>
  );
};

export default InfoRow;
