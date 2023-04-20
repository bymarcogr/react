import MoviesContainer from "../../components/moviesContainer";
import { MoviesListDefault } from "../../models/moviesListDefault";

export default {
  title: "Movie Container",
  component: MoviesContainer,
};

export const Original = () => (
  <div className="container-fluid bg-black">
    <MoviesContainer movies={MoviesListDefault}></MoviesContainer>
  </div>
);

export const Secondary = () => (
  <div className="container-fluid bg-white">
    <MoviesContainer movies={MoviesListDefault}></MoviesContainer>
  </div>
);
