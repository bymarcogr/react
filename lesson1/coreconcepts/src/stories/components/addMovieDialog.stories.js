import AddMovieDialog from "../../components/addMovieDialog";

import { MoviesListDefault } from "../../models/moviesListDefault";

export default {
  title: "Movie Dialog",
  component: AddMovieDialog,
};

export const AddMovie = () => (
  <div className="container-fluid">
    <AddMovieDialog
      isOpen={true}
      onSubmit={() => {}}
      onClose={() => {}}
      movie={null}
    ></AddMovieDialog>
  </div>
);

export const EditMovie = () => (
  <div className="container-fluid">
    <AddMovieDialog
      isOpen={true}
      onSubmit={() => {}}
      onClose={() => {}}
      movie={MoviesListDefault[10]}
    ></AddMovieDialog>
  </div>
);
