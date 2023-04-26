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
    <div style={{ height: "400px" }}>
      <br />
      <br />
      <h3 className="lead text-uppercase fs-2 light">{"Find your Movie"}</h3>
      <br />
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
    </div>
  );
}

Searcher.defaultProps = {
  searchQuery: "",
  onSearch: () => console.log("on search"),
};
