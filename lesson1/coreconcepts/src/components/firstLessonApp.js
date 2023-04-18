import React from "react";

import Counter from "./counter";
import Searcher from "./searcher";
import GenreSelector from "./genreSelector";
import { GenreListDefault } from "../models/genreListDefault";

export default function FirstLessonApp() {
  const handleOnSearch = (searchString) => {
    alert(searchString);
  };

  const handleOnSelect = (genreSelected) => {
    alert(genreSelected);
  };

  return (
    <div style={{ padding: "5px" }}>
      <h1 className="title">Counter Component</h1>
      <Counter number={1}></Counter>
      <h1 className="title">Search Component</h1>
      <br />
      <Searcher
        searchQuery={"Search String?"}
        onSearch={(e) => handleOnSearch(e)}
      ></Searcher>
      <h1 className="title">Genre List Component</h1>
      <br />
      <GenreSelector
        genreList={GenreListDefault}
        selectedGenre={"Fantasy"}
        onSelect={(e) => handleOnSelect(e)}
      ></GenreSelector>
    </div>
  );
}
