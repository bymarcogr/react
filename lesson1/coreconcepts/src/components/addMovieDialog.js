import React from "react";
import PropTypes from "prop-types";

import GenericDialog from "./genericDialog";
import { MovieInfo } from "../models/movieInfo";
import { GenreListDefault } from "../models/genreListDefault";

export default function AddMovieDialog({ isOpen, onClose, movie, onSubmit }) {
  const title = () => {
    let movieTitle = movie == null ? "Add" : "Edit";

    return (
      <h3 className="lead text-uppercase fs-4">{movieTitle + " Movie"}</h3>
    );
  };

  return (
    <>
      <GenericDialog showDialog={isOpen} onClose={onClose} title={title()}>
        <form
          title="modal-add-movie-dialog"
          onSubmit={(e) => {
            onSubmit(e);
            onClose();
          }}
        >
          <div className="container ">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <input type="hidden" name="id" value={movie?.id} />
                <label className="text-uppercase modal-title">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-input-text"
                  placeholder="Title"
                  defaultValue={movie?.name}
                />
              </div>
              <div className="col-md-5 col-sm-12">
                <label className="text-uppercase modal-title">
                  Release Date
                </label>
                <input
                  type="date"
                  name="release_date"
                  placeholder="Release Date"
                  className="form-input-text"
                  defaultValue={movie?.formatedDate}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <label className="text-uppercase modal-title">Movie Url</label>
                <input
                  type="url"
                  name="url"
                  className="form-input-text"
                  placeholder="https://"
                  defaultValue={movie?.image_url}
                />
              </div>
              <div className="col-md-5 col-sm-12">
                <label className="text-uppercase modal-title">Rating</label>
                <input
                  type="number"
                  name="rating"
                  className="form-input-text"
                  placeholder="7.8"
                  defaultValue={movie?.rating}
                  min={0}
                  max={10}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <label className="text-uppercase modal-title">Genre</label>
                <select
                  name="genre"
                  className="form-input-text"
                  placeholder="Select Genre"
                  multiple={true}
                  size={2}
                  value={movie?.genres}
                  onChange={(e) => console.log(e.target.value)}
                >
                  {GenreListDefault.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-md-5 col-sm-12">
                <label className="text-uppercase modal-title">Runtime</label>
                <input
                  type="number"
                  name="runtime"
                  className="form-input-text"
                  placeholder="minutes"
                  defaultValue={movie?.duration}
                  min={0}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-uppercase modal-title">Overview</label>
                <textarea
                  name="description"
                  className="form-input-text"
                  rows={4}
                  maxLength={1024}
                  placeholder="Movie description"
                  defaultValue={movie?.description}
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <input
            type="submit"
            className="form-button  float-end"
            value="Submit"
            title="btn-submit-add-movie"
          />
          <input
            type="reset"
            className="form-button-secondary float-end"
            value="Reset"
            title="btn-reset-add-movie"
          />
        </form>
      </GenericDialog>
    </>
  );
}

AddMovieDialog.propTypes = {
  movie: PropTypes.instanceOf(MovieInfo),
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
