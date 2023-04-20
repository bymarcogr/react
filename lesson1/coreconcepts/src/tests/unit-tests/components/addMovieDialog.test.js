import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddMovieDialog from "../../../components/addMovieDialog";
import { MoviesListDefault } from "../../../models/moviesListDefault";

describe("ShowDemoDialog", () => {
  test("When prop isOpen is true, Should display AddMovie Dialog", () => {
    render(
      <AddMovieDialog isOpen={true} onClose={() => {}} onSubmit={() => {}} />
    );
    expect(screen.getByText(/ADD MOVIE/i)).toBeInTheDocument();
    expect(screen.getByText(/TITLE/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/RELEASE DATE/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Release Date/i)).toBeInTheDocument();
    expect(screen.getByText(/MOVIE URL/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/https:\/\//i)).toBeInTheDocument();
    expect(screen.getByText(/RATING/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/7.8/i)).toBeInTheDocument();
    expect(screen.getByText(/GENRE/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Select Genre/i)).toBeInTheDocument();
    expect(screen.getByText(/RUNTIME/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/OVERVIEW/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/minutes/i)).toBeInTheDocument();
    expect(screen.getByTitle("btn-submit-add-movie")).toBeInTheDocument();
    expect(screen.getByTitle("btn-reset-add-movie")).toBeInTheDocument();
  });

  test("When prop is Open is false, Should not display AddMovie Dialog", () => {
    render(
      <AddMovieDialog isOpen={false} onClose={() => {}} onSubmit={() => {}} />
    );
    const expectedMovie = screen.queryByText(/ADD MOVIE/i);
    expect(expectedMovie).not.toBeInTheDocument();
  });

  test("When Click Close, Should call handleOnClose", () => {
    let calledOnClose = false;
    const handleOnClose = () => (calledOnClose = true);

    render(
      <AddMovieDialog
        isOpen={true}
        onClose={handleOnClose}
        onSubmit={() => {}}
      />
    );

    fireEvent.click(screen.getByTitle("btn-close-dialog"));

    expect(calledOnClose).toBe(true);
  });

  test("When Click onSubmit, Should call handleOnSubmit", () => {
    let calledOnSubmit = null;
    const handleOnSubmit = (e) => (calledOnSubmit = e);

    render(
      <AddMovieDialog
        isOpen={true}
        onClose={() => {}}
        onSubmit={handleOnSubmit}
      />
    );

    fireEvent.click(screen.getByTitle("btn-submit-add-movie"));

    expect(calledOnSubmit).not.toBe(null);
  });

  test("When prop movie is send, Should display Edit Movie Dialog", () => {
    render(
      <AddMovieDialog
        isOpen={true}
        onClose={() => {}}
        onSubmit={() => {}}
        movie={MoviesListDefault[10]}
      />
    );
    expect(screen.getByText(/EDIT MOVIE/i)).toBeInTheDocument();
    expect(screen.getByText(/TITLE/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/RELEASE DATE/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Release Date/i)).toBeInTheDocument();
    expect(screen.getByText(/MOVIE URL/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/https:\/\//i)).toBeInTheDocument();
    expect(screen.getByText(/RATING/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/7.8/i)).toBeInTheDocument();
    expect(screen.getByText(/GENRE/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Select Genre/i)).toBeInTheDocument();
    expect(screen.getByText(/RUNTIME/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/OVERVIEW/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/minutes/i)).toBeInTheDocument();
    expect(screen.getByTitle("btn-submit-add-movie")).toBeInTheDocument();
    expect(screen.getByTitle("btn-reset-add-movie")).toBeInTheDocument();
  });
});
