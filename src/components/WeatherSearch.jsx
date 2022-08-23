import React, { useState } from "react";
import SearchButton from "./inputs/SearchButton";
import TextInput from "./inputs/TextInput";

import classes from "./WeatherSearch.module.css";

const WeatherSearch = ({ setQuery }) => {
  const [searchText, setSearchText] = useState("");

  const searchClickHandler = () => {
    // set new query
    setQuery({
      q: searchText,
    });
    setSearchText("");
  };

  return (
    <div className={classes["location-search"]}>
      <TextInput
        placeholder="Another location"
        value={searchText}
        setState={setSearchText}
      />
      <SearchButton onClick={searchClickHandler} />
    </div>
  );
};

export default WeatherSearch;
