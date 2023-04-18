import GenreSelector from "../../components/genreSelector";

import { GenreListDefault } from "../../models/genreListDefault";

export default {
  title: "Genre List",
  component: GenreSelector,
};

const handleOnSelect = (genreSelected) => {
  alert(genreSelected);
};

export const Original = () => (
  <GenreSelector
    genreList={GenreListDefault}
    selectedGenre={"Western"}
    onSelect={(e) => handleOnSelect(e)}
  ></GenreSelector>
);

export const Secondary = () => (
  <GenreSelector
    genreList={GenreListDefault}
    selectedGenre={"Western"}
    onSelect={(e) => handleOnSelect(e)}
    primaryButtonClassName={"netflixBar"}
    secondaryButtonClassName={"netflixBarSelected"}
  ></GenreSelector>
);
