import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import GenericDialog from "./genericDialog";
import { MovieInfo } from "../models/movieInfo";
import { GenreListDefault } from "../models/genreListDefault";

import { useForm } from "react-hook-form";

export default function AddMovieDialog({ isOpen, onClose, movie, onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: movie?.id,
      title: movie?.title,
      poster_path: movie?.poster_path,
      genres: movie?.genres,
      runtime: movie?.runtime,
      overview: movie?.overview,
    },
  });

  useEffect(() => {
    reset(movie);
  }, [movie]);

  const isNew = () => {
    return movie == null;
  };

  const title = () => {
    let movieTitle = isNew() ? "Add" : "Edit";

    return (
      <h3 className="lead text-uppercase fs-4">{movieTitle + " Movie"}</h3>
    );
  };

  return (
    <>
      <GenericDialog showDialog={isOpen} onClose={onClose} title={title()}>
        <form title="modal-add-movie-dialog" onSubmit={handleSubmit(onSubmit)}>
          <div className="container ">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                {!isNew() ? (
                  <input
                    type="hidden"
                    {...register("id", { valueAsNumber: true })}
                  />
                ) : null}
                <label className="text-uppercase modal-title">Title</label>
                <input
                  type="text"
                  className="form-input-text"
                  placeholder="Title"
                  {...register("title", { required: true })}
                />
                {errors.title && <span>This field is required</span>}
              </div>
              <div className="col-md-5 col-sm-12">
                <label className="text-uppercase modal-title">
                  Release Date
                </label>
                <input
                  type="date"
                  placeholder="Release Date"
                  className="form-input-text"
                  {...register("release_date", { required: true })}
                />
                {errors.release_date && <span>Release Date is required</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <label className="text-uppercase modal-title">Movie Url</label>
                <input
                  type="url"
                  className="form-input-text"
                  placeholder="https://"
                  {...register("poster_path", { required: true })}
                />
                {errors.poster_path && <span>Image URL is required</span>}
              </div>
              <div className="col-md-5 col-sm-12">
                <label className="text-uppercase modal-title">Rating</label>
                <input
                  type="number"
                  className="form-input-text"
                  placeholder="7.8"
                  step="0.1"
                  {...register("vote_average", {
                    required: true,
                    min: 0,
                    max: 10,
                    valueAsNumber: true,
                  })}
                />
                {errors.vote_average && (
                  <span>Value from 0 to 10 is required.</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <label className="text-uppercase modal-title">Genre</label>
                <select
                  className="form-input-text"
                  placeholder="Select Genre"
                  multiple={true}
                  size={2}
                  value={movie?.genres}
                  onChange={(e) => console.log(e.target.value)}
                  {...register("genres", { required: true })}
                >
                  {GenreListDefault.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                {errors.genres && <span>This field is required.</span>}
              </div>
              <div className="col-md-5 col-sm-12">
                <label className="text-uppercase modal-title">Runtime</label>
                <input
                  type="number"
                  className="form-input-text"
                  placeholder="minutes"
                  step="1"
                  {...register("runtime", {
                    required: true,
                    min: 0,
                    max: 3600,
                    valueAsNumber: true,
                  })}
                />
                {errors.runtime && <span>This field is required.</span>}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-uppercase modal-title">Overview</label>
                <textarea
                  className="form-input-text"
                  rows={4}
                  maxLength={1024}
                  placeholder="Movie description"
                  {...register("overview", {
                    required: true,
                    minLength: 20,
                  })}
                />
                {errors.overview && <span>This field is required.</span>}
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
