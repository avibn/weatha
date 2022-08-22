import React from "react";

import classes from "./WeatherWidget.module.css";
import { CloudyIcon } from "../icons";

const WeatherWidget = ({ temperature, weatherType, city, date }) => {
  return (
    <div className={classes["weather-widget"]}>
      <p className={classes["temperature-text"]}>16°</p>
      <div className={classes["extra-info-box"]}>
        <div className={classes["location-date-box"]}>
          <p className={classes["location-text"]}>London</p>
          <p className={classes["extra-text"]}>06:09 - Monday, 9 Sep '22</p>
        </div>
        <div className={classes["weather-icon-box"]}>
          <CloudyIcon
            width={50}
            height={50}
            fillOpacity={0.5}
            strokeWidth={20}
            stroke="#ffffff"
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
