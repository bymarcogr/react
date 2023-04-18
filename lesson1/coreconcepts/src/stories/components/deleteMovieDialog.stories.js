import GenericDialog from "../../components/genericDialog";

export default {
  title: "Movie Dialog",
  component: GenericDialog,
};

export const DeleteMovie = () => (
  <>
    <GenericDialog
      showDialog={true}
      title={<h3 className="lead text-uppercase fs-4">Delete Movie</h3>}
      onClose={() => {}}
      modalSize={"md"}
    >
      <form
        title="modal-delete-movie-dialog"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <input type="hidden" name="id" value={1} />
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
