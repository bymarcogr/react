import MoviesContainer from "../../components/moviesContainer";
import { MoviesListDefault } from "../../models/moviesListDefault";

export default {
  title: "Movie Container",
  component: MoviesContainer,
};

export const Original = () => (
  <MoviesContainer movies={MoviesListDefault}></MoviesContainer>
);

export const Secondary = () => (
  <MoviesContainer movies={MoviesListDefault}></MoviesContainer>
);
