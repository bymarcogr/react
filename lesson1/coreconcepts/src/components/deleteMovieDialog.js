import React from "react";

import GenericDialog from "./genericDialog";

export default function DeleteMovieDialog({
  isOpen,
  onClose,
  movieId,
  onSubmit,
}) {
  return (
    <>
      <GenericDialog
        showDialog={isOpen}
        onClose={onClose}
        title={<h3 className="lead text-uppercase fs-4">Delete Movie</h3>}
        modalSize={"md"}
      >
        <form
          title="modal-delete-movie-dialog"
          onSubmit={(e) => {
            onSubmit(e, movieId);
            onClose();
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <input type="hidden" name="id" value={movieId} />
                <label className="text-light">
                  Are you sure you want to delete this movie?
                </label>
              </div>
            </div>
          </div>
          <br />
          <input
            type="submit"
            className="form-button float-end"
            value="Confirm"
            title="btn-submit-add-movie"
          />
        </form>
      </GenericDialog>
    </>
  );
}
