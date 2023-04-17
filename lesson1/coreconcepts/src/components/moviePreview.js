import React from "react";
import PropTypes from "prop-types";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { MovieInfo } from "../models/movieInfo";

export default function MoviePreview({ movie, onClick }) {
  return (
    movie && (
      <div
        className="col-md-4 col-lg-3 border border-dark rounded-3 position-relative"
        style={{
          maxHeight: 500,
          maxWidth: 350,
          margin: 5,
        }}
        title={`movie-${movie.id}`}
      >
        <DropdownButton
          title="⋮"
          data-testid={`options-movie-${movie.id}`}
          name={`options-movie-${movie.id}`}
          className="position-absolute end-0 float-end bi bi-three-dots-vertical border border-secondary"
          variant="light"
          bsPrefix={`prefix-movie-${movie.id}`}
        >
          <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
          <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
        </DropdownButton>
        <img
          title={`img-preview-movie-${movie.id}`}
          src={movie.image_url}
          alt={movie.name}
          style={{ maxHeight: "90%", maxWidth: "95%", cursor: "pointer" }}
          onClick={() => onClick && onClick(movie)}
        />

        <div
          title={`info-bar-movie-${movie.id}`}
          style={{ width: "100%", marginLeft: "-12px", cursor: "pointer" }}
          className="text-bg-dark position-absolute bottom-0 p-4 "
          onClick={() => onClick && onClick(movie)}
        >
          <div className="position-absolute top-0 start-0">{movie.name}</div>
          <div className="position-absolute top-0 end-0">
            <span className="badge rounded-pill bg-secondary">
              {movie.release_year}
            </span>
          </div>
          <div className="position-absolute top-2 start-0">
            <small
              data-testid={`movie-genders-${movie.id}`}
              className="text-muted"
            >
              {movie.formatedGenders}
            </small>
          </div>
        </div>
      </div>
    )
  );
}

MoviePreview.propTypes = {
  movie: PropTypes.instanceOf(MovieInfo),
  onClick: PropTypes.func,
};

MoviePreview.defaultProps = {
  movie: null,
  onClick: () => console.log("on click"),
};
