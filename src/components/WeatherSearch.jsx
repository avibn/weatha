import React, { useState } from "react";
import SearchButton from "./inputs/SearchButton";
import TextInput from "./inputs/TextInput";

import classes from "./WeatherSearch.module.css";

const WeatherSearch = ({ searchHandler }) => {
  const [searchText, setSearchText] = useState("");

  const onClick = () => {
    if (searchText) {
      searchHandler(searchText);
    }
  };

  return (
    <div className={classes["location-search"]}>
      <TextInput
        placeholder="Another location"
        value={searchText}
        setState={setSearchText}
      />
      <SearchButton onClick={onClick} />
    </div>
  );
};

export default WeatherSearch;
