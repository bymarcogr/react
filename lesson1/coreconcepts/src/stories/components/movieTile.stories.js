import MovieTile from "../../components/movieTile";
import { MoviesListDefault } from "../../models/moviesListDefault";

export default {
  title: "Movie Tile",
  component: MovieTile,
};

const handleOnClick = (movie) => {
  alert(movie);
};

const handleOnSort = (movie) => {
  alert(movie);
};

export const Original = () => (
  <MovieTile
    movies={MoviesListDefault}
    onClick={handleOnClick}
    onSort={handleOnSort}
  ></MovieTile>
);

export const Secondary = () => (
  <MovieTile
    movies={MoviesListDefault}
    onClick={handleOnClick}
    onSort={handleOnSort}
  ></MovieTile>
);
