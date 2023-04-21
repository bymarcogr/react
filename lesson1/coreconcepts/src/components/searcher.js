import React, { useState } from "react";
import GenericButton from "./genericButton";

export default function Searcher({
  searchQuery,
  onSearch,
  textClassName,
  buttonClassName,
}) {
  const [searchQueryState, setSearchQueryState] = useState(searchQuery);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchQueryState(event.target.value);
      onSearch(searchQueryState);
    }
  };

  return (
    <span>
      <input
        type={"text"}
        placeholder={"What do you want to watch?"}
        value={searchQueryState}
        onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setSearchQueryState(e.target.value)}
        className={textClassName ?? "search"}
      ></input>
      <GenericButton
        title={"Search"}
        onClick={() => onSearch(searchQueryState)}
        className={buttonClassName ?? "netflixSearch"}
      ></GenericButton>
    </span>
  );
}

Searcher.defaultProps = {
  searchQuery: "",
  onSearch: () => console.log("on search"),
};
