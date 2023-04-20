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
  <div className="container-fluid bg-black">
    <MovieTile
      movies={MoviesListDefault}
      onClick={handleOnClick}
      onSort={handleOnSort}
    ></MovieTile>
  </div>
);

export const Secondary = () => (
  <MovieTile
    movies={MoviesListDefault}
    onClick={handleOnClick}
    onSort={handleOnSort}
  ></MovieTile>
);
