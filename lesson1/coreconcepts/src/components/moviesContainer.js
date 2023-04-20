import React, { useState } from "react";
import PropTypes from "prop-types";

import MovieTile from "./movieTile";
import { MovieInfo } from "../models/movieInfo";
import MovieDetails from "./movieDetails";
import SortMovies from "./sortMovies";

export default function MoviesContainer(props) {
  const [moviesList, setMoviesList] = useState(props.movies);
  const [selectedMovie, setSelectedMovie] = useState();

  const handleOnClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleOnSort = (option) => {
    option === "Title" ? sortByTitle() : sortByYear();
    setSelectedMovie(null);
  };

  const sortByTitle = () => {
    let titleSorted = [...moviesList].sort(function (a, b) {
      return a.name < b.name ? -1 : 1;
    });
    setMoviesList(titleSorted);
  };

  const sortByYear = () => {
    let yearSorted = [...moviesList].sort(function (a, b) {
      return a.release_year - b.release_year;
    });
    setMoviesList(yearSorted);
  };

  return (
    <div className="container-fluid bg-black">
      <MovieDetails movie={selectedMovie}></MovieDetails>
      <MovieTile movies={moviesList} onClick={handleOnClick}>
        <SortMovies
          onSort={handleOnSort}
          containerClassName={"float-end"}
        ></SortMovies>
      </MovieTile>
    </div>
  );
}

MovieTile.defaultProps = {
  movies: [],
};

MovieTile.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(MovieInfo)),
};
