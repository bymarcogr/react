import MoviePreview from "../../components/moviePreview";
import { MoviesListDefault } from "../../models/moviesListDefault";

export default {
  title: "Movie Preview",
  component: MoviePreview,
};

const handleOnClick = (movie) => {
  alert(movie);
};

export const Original = () => (
  <MoviePreview
    movie={MoviesListDefault[0]}
    onClick={handleOnClick}
  ></MoviePreview>
);

export const Secondary = () => (
  <MoviePreview
    movie={MoviesListDefault[10]}
    onClick={handleOnClick}
  ></MoviePreview>
);
