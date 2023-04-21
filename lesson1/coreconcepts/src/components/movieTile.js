import React from "react";
import PropTypes from "prop-types";

import { MovieInfo } from "../models/movieInfo";
import MoviePreview from "./moviePreview";

export default function MovieTile({
  onClick,
  movies,
  children,
  onEdit,
  onDelete,
}) {
  return (
    <>
      {children}
      <div className="row text-center">
        {movies?.map((movie) => {
          return (
            <MoviePreview
              key={movie.id}
              movie={movie}
              onClick={onClick}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </>
  );
}

MovieTile.defaultProps = {
  movies: [],
  onClick: () => console.log("on click"),
};

MovieTile.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(MovieInfo)),
  onClick: PropTypes.func,
};
