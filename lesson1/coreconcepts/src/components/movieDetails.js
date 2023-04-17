import React from "react";
import PropTypes from "prop-types";

import { MovieInfo } from "../models/movieInfo";

export default function MovieDetails({ movie }) {
  return (
    movie && (
      <div
        className="row text-center border border-secondary-subtle"
        title={`preview-movie-${movie.id}`}
        style={{
          margin: 5,
          padding: 10,
        }}
      >
        <div
          className="col-sm-12 col-md-4 col-lg-4 border border-dark rounded-3"
          style={{
            maxHeight: 700,
            maxWidth: 350,
            margin: 5,
          }}
        >
          <img
            src={movie.image_url}
            alt={movie.name}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="col-sm-12 col-md-6  col-lg-6 text-light text-start">
          <div className="col-sm-12 col-md-10 col-lg-12">
            <h1>
              {movie.name}&emsp;
              <span
                className="border border-light rounded-5 fs-3 fw-lighter"
                style={{ margin: "25px" }}
              >
                &nbsp;{movie.rating}&nbsp;
              </span>
            </h1>
          </div>
          <br />
          <div className="col-sm-12 col-md-6  col-lg-6 text-white-50 text-start fs-4">
            {movie.formatedGenders}
          </div>
          <br />
          <div className="col-sm-12 col-md-6  col-lg-6 text-danger text-start  fs-3">
            {movie.release_year}&emsp;{movie.formatedDuration}
          </div>
          <br />
          <div className="col-sm-12 col-md-12  col-lg-12 text-white-50 text-start">
            {movie.description}
          </div>
        </div>
      </div>
    )
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.instanceOf(MovieInfo),
};
