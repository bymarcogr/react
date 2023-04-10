import MovieDetails from "../../components/movieDetails";
import { MoviesListDefault } from "../../../models/moviesListDefault";

export default {
  title: "Movie Details",
  component: MovieDetails,
};

export const Original = () => (
  <MovieDetails movie={MoviesListDefault[0]}></MovieDetails>
);

export const Secondary = () => (
  <MovieDetails movie={MoviesListDefault[10]}></MovieDetails>
);
