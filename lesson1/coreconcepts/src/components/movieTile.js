import React from "react";
import PropTypes from "prop-types";

import { MovieInfo } from "../models/movieInfo";
import MoviePreview from "./moviePreview";

export default function MovieTile({ onClick, movies, children }) {
  return (
    <>
      {children}
      <div className="row text-center">
        {movies?.map((movie) => {
          return (
            <MoviePreview key={movie.id} movie={movie} onClick={onClick} />
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
