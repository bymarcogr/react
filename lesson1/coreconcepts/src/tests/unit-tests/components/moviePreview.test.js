import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoviePreview from "../../../components/moviePreview";
import { MoviesListDefault } from "../../../models/moviesListDefault";

describe("MoviePreview", () => {
  const movie = MoviesListDefault[15];

  test("When prop movie is defined, Should display values", () => {
    render(<MoviePreview movie={movie} />);
    const expectedMovie = screen.getByTitle("movie-16");
    expect(expectedMovie).toHaveTextContent(movie.name);
    expect(expectedMovie).toHaveTextContent(movie.release_year);
    expect(expectedMovie).toHaveTextContent(movie.formatedGenres);
  });

  test("When prop movie is defined and onClick not defined, Should display values and Not Throw Exception", () => {
    render(<MoviePreview movie={movie} onClick={undefined} />);
    const expectedMovie = screen.getByTitle("movie-16");

    fireEvent.click(
      screen.getByText(/Harry Potter and the Deathly Hallows: Part 2/i)
    );

    expect(expectedMovie).toHaveTextContent(movie.name);
    expect(expectedMovie).toHaveTextContent(movie.release_year);
    expect(expectedMovie).toHaveTextContent(movie.formatedGenres);
  });

  test("When prop movie is defined and onClick null, Should not display values and Not Throw Exception", () => {
    render(<MoviePreview movie={movie} onClick={null} />);
    const expectedMovie = screen.getByTitle("movie-16");
    expect(expectedMovie).toHaveTextContent(movie.name);
    expect(expectedMovie).toHaveTextContent(movie.release_year);
    expect(expectedMovie).toHaveTextContent(movie.formatedGenres);

    fireEvent.click(
      screen.getByText(/Harry Potter and the Deathly Hallows: Part 2/i)
    );
  });

  test("When prop movie is defined, Click on title should get the movie", () => {
    let calledItemResponse;
    const handleOnClick = (receivedItem) => (calledItemResponse = receivedItem);

    render(<MoviePreview movie={movie} onClick={handleOnClick} />);

    fireEvent.click(
      screen.getByText(/Harry Potter and the Deathly Hallows: Part 2/i)
    );

    expect(calledItemResponse.name).toBe(movie.name);
  });

  test("When prop movie is defined, Click on image should get the movie", () => {
    let calledItemResponse;
    const handleOnClick = (receivedItem) => (calledItemResponse = receivedItem);

    render(<MoviePreview movie={movie} onClick={handleOnClick} />);

    fireEvent.click(screen.getByTitle("img-preview-movie-16"));

    expect(calledItemResponse.name).toBe(movie.name);
  });

  test("When prop movie is not defined, Should not display values", () => {
    render(<MoviePreview />);

    const expectedMovie = screen.queryByText(movie.name);
    expect(expectedMovie).not.toBeInTheDocument();
  });

  test("When prop movie is null, Should not display values", () => {
    render(<MoviePreview movie={null} />);

    const expectedMovie = screen.queryByText(movie.name);
    expect(expectedMovie).not.toBeInTheDocument();
  });
});
