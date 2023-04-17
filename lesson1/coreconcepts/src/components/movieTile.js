import React from "react";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";

import { MovieInfo } from "../models/movieInfo";
import MoviePreview from "./moviePreview";

export default function MovieTile({ onSort, onClick, movies }) {
  return (
    <>
      <div className="float-end text-muted">
        Sort By
        <Form.Select
          id={"sort-by-select-id"}
          name={"sort-by-select-id"}
          title="sort-by-select"
          size="sm"
          className="float-end"
          defaultValue="Title"
          onChange={(e) => onSort(e.target.value)}
        >
          <option>Release Date</option>
          <option>Title</option>
        </Form.Select>
      </div>

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
  onSort: () => console.log("on sort"),
};

MovieTile.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(MovieInfo)),
  onClick: PropTypes.func,
  onSort: PropTypes.func,
};
