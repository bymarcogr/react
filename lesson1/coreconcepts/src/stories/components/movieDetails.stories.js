import MovieDetails from "../../components/movieDetails";
import { MoviesListDefault } from "../../models/moviesListDefault";

export default {
  title: "Movie Details",
  component: MovieDetails,
};

export const Original = () => (
  <div className="container-fluid bg-black">
    <MovieDetails movie={MoviesListDefault[0]}></MovieDetails>
  </div>
);

export const Secondary = () => (
  <div className="container-fluid bg-primary">
    <MovieDetails movie={MoviesListDefault[10]}></MovieDetails>
  </div>
);
