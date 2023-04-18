import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieDetails from "../../../components/movieDetails";
import { MoviesListDefault } from "../../../models/moviesListDefault";

describe("MoviePreview", () => {
  const movie = MoviesListDefault[15];

  test("When prop movie is defined, Should display values", () => {
    render(<MovieDetails movie={movie} />);

    const expectedMovie = screen.getByTitle("preview-movie-16");
    expect(expectedMovie).toHaveTextContent(movie.name);
    expect(expectedMovie).toHaveTextContent(movie.release_year);
    expect(expectedMovie).toHaveTextContent(movie.formatedgenres);
    expect(expectedMovie).toHaveTextContent(movie.rating);
    expect(expectedMovie).toHaveTextContent(movie.formatedDuration);
  });

  test("When prop movie is not defined, Should not display values", () => {
    render(<MovieDetails movie={undefined} />);

    const expectedMovie = screen.queryByText(movie.name);
    expect(expectedMovie).not.toBeInTheDocument();
  });

  test("When prop movie is null, Should not display values", () => {
    render(<MovieDetails movie={null} />);

    const expectedMovie = screen.queryByText(movie.name);
    expect(expectedMovie).not.toBeInTheDocument();
  });
});
