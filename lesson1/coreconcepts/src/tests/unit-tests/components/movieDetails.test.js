import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieDetails from "../../../components/movieDetails";
import { MoviesListDefault } from "../../../models/moviesListDefault";

describe("MoviePreview", () => {
  const movie = MoviesListDefault[15];

  test("When prop movie is defined, Should display values", () => {
    render(<MovieDetails movie={movie} onClose={() => {}} />);

    const expectedMovie = screen.getByTitle("preview-movie-16");
    expect(expectedMovie).toHaveTextContent(movie.title);
    expect(expectedMovie).toHaveTextContent(movie.formatedDate);
    expect(expectedMovie).toHaveTextContent(movie.formatedGenres);
    expect(expectedMovie).toHaveTextContent(movie.vote_average);
    expect(expectedMovie).toHaveTextContent(movie.formatedDuration);
  });

  test("When prop movie is not defined, Should not display values", () => {
    render(<MovieDetails movie={undefined} />);

    const expectedMovie = screen.queryByText(movie.title);
    expect(expectedMovie).not.toBeInTheDocument();
  });

  test("When prop movie is null, Should not display values", () => {
    render(<MovieDetails movie={null} />);

    const expectedMovie = screen.queryByText(movie.title);
    expect(expectedMovie).not.toBeInTheDocument();
  });
});
