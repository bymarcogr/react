import React from "react";
import PropTypes from "prop-types";

import { MovieInfo } from "../models/movieInfo";

export default function MovieDetails({
  movie,
  maxImageHeight,
  maxImageWidth,
  onClose,
}) {
  return (
    movie && (
      <>
        <div
          className="row text-center "
          title={`preview-movie-${movie.id}`}
          style={{
            margin: 5,
            padding: 10,
          }}
        >
          <div
            className="col-sm-12 col-md-4 col-lg-4 border border-dark rounded-3"
            style={{
              maxHeight: maxImageHeight ?? 700,
              maxWidth: maxImageWidth ?? 350,
              margin: 5,
            }}
          >
            <img
              src={movie.poster_path}
              alt={movie.title}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
              onError={({ currentTarget }) => {
                currentTarget.onError = null;
                currentTarget.src = "images/unavailable-image.jpg";
              }}
            />
          </div>
          <div className="col-sm-12 col-md-6  col-lg-6 text-light text-start">
            <div className="col-sm-12 col-md-10 col-lg-12">
              <button
                type="button"
                className="btn-close btn-close-white float-end"
                title="btn-close-dialog"
                style={{ right: 5, top: 5, color: "#ffffff" }}
                onClick={onClose}
              ></button>
              <h1>
                {movie.title}&emsp;
                <span
                  className="border border-light rounded-5 fs-3 fw-lighter"
                  style={{ margin: "25px" }}
                >
                  &nbsp;{movie.vote_average}&nbsp;
                </span>
              </h1>
            </div>
            <br />
            <div className="col-sm-12 col-md-6  col-lg-6 text-white-50 text-start fs-4">
              {movie.formatedGenres}
            </div>
            <br />
            <div className="col-sm-12 col-md-6  col-lg-6 text-danger text-start  fs-3">
              {movie.formatedDate}&emsp;{movie.formatedDuration}
            </div>
            <br />
            <div className="col-sm-12 col-md-12  col-lg-12 text-white-50 text-start max-lines">
              {movie.overview}
            </div>
          </div>
        </div>
      </>
    )
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.instanceOf(MovieInfo),
};
