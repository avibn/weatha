import React from "react";

import classes from "./SearchButton.module.css";
import { SearchIcon } from "../../icons";

const SearchButton = ({ onClick = () => {} }) => {
  return (
    <button className={classes["search-btn"]} onClick={onClick}>
      <SearchIcon width={25} height={25} />
    </button>
  );
};

export default SearchButton;
