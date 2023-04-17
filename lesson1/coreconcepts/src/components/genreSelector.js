import React, { useState } from "react";
import GenericButton from "./genericButton";
import "../styles/global.css";

export default function GenreSelector(props) {
  const [selectedGenre, setSelectedGenre] = useState(props.selectedGenre ?? "");

  const handleClick = (item) => {
    setSelectedGenre(item);
    props.onSelect(item);
  };

  return (
    <span>
      {props.genreList?.map((genre) => (
        <GenericButton
          key={genre}
          title={genre}
          className={
            genre === selectedGenre
              ? props.primaryButtonClassName ?? "netflixBarSelected"
              : props.secondaryButtonClassName ?? "netflixBar"
          }
          onClick={(e) => handleClick(e.target.innerHTML)}
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
