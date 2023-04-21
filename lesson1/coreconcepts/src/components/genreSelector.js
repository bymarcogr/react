import React, { useState } from "react";
import GenericButton from "./genericButton";
import "../styles/global.css";

export default function GenreSelector({
  selectedGenre,
  onSelect,
  genreList,
  primaryButtonClassName,
  secondaryButtonClassName,
}) {
  const [genreState, setGenreState] = useState(selectedGenre ?? "");

  const handleClick = (item) => {
    setGenreState(item);
    onSelect(item);
  };

  return (
    <span>
      {genreList?.map((genre) => (
        <GenericButton
          key={genre}
          title={genre}
          className={
            genre === genreState && selectedGenre !== ""
              ? primaryButtonClassName ?? "netflixBarSelected"
              : secondaryButtonClassName ?? "netflixBar"
          }
          onClick={() => handleClick(genre)}
        ></GenericButton>
      ))}
    </span>
  );
}

GenreSelector.defaultProps = {
  selectedGenre: "",
  primaryButtonClassName: "netflixBarSelected",
  secondaryButtonClassName: "netflixBar",
};
