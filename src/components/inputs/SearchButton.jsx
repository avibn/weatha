import React from "react";

import classes from "./SearchButton.module.css";
import { SearchIcon } from "../../icons";

const SearchButton = ({ onClick = () => {} }) => {
  return (
    <button className={classes["search-btn"]}>
      <SearchIcon width={25} height={25} onClick={onClick} />
    </button>
  );
};

export default SearchButton;
