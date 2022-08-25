import React from "react";
import dateFormat from "dateformat";

import classes from "./WeatherWidget.module.css";
import { CloudyIcon } from "../icons";

const WeatherWidget = ({ temperature, weatherType, city, date }) => {
  return (
    <div className={classes["weather-widget"]}>
      <p className={classes["temperature-text"]}>{Math.round(temperature)}°</p>
      <div className={classes["extra-info-box"]}>
        <div className={classes["location-date-box"]}>
          <p className={classes["location-text"]}>{city}</p>
          <p className={classes["extra-text"]}>
            {dateFormat(new Date(date * 1000), "HH:MM - dddd, d mmm 'yy")}
          </p>
        </div>
        <img src={weatherType} alt="Weather icon" />
      </div>
    </div>
  );
};

export default WeatherWidget;
