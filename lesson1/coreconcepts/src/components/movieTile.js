import React from "react";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";

import { MovieInfo } from "../models/movieInfo";
import MoviePreview from "./moviePreview";

export default function MovieTile(props) {
  return (
    <>
      <div className="float-end text-muted">
        Sort By
        <Form.Select
          size="sm"
          className="float-end"
          defaultValue="Title"
          onChange={(e) => props.onSort(e.target.value)}
        >
          <option>Release Date</option>
          <option>Title</option>
        </Form.Select>
      </div>

      <div className="row text-center">
        {props.movies.map((movie) => {
          console.log(movie);
          return (
            <MoviePreview
              key={movie.id}
              movie={movie}
              onClick={props.onClick}
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
