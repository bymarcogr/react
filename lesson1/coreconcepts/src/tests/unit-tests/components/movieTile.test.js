import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieTile from "../../../components/movieTile";
import { MoviesListDefault } from "../../../models/moviesListDefault";

describe("MoviesContainer", () => {
  const movie1 = MoviesListDefault[8];
  const movie2 = MoviesListDefault[0];

  test("When prop movies is defined, Should display values", () => {
    render(<MovieTile movies={[movie2, movie1]} />);

    const expectedMovie1 = screen.getByTitle("movie-9");
    expect(expectedMovie1).toHaveTextContent(movie1.name);
    expect(expectedMovie1).toHaveTextContent(movie1.release_year);
    expect(expectedMovie1).toHaveTextContent(movie1.formatedgenres);
    const expectedMovie2 = screen.getByTitle("movie-1");
    expect(expectedMovie2).toHaveTextContent(movie2.name);
    expect(expectedMovie2).toHaveTextContent(movie2.release_year);
    expect(expectedMovie2).toHaveTextContent(movie2.formatedgenres);
  });

  test("When prop movies is not defined, Should not display values", () => {
    render(<MovieTile movies={undefined} />);

    const expectedMovie1 = screen.queryByText(movie1.name);
    expect(expectedMovie1).not.toBeInTheDocument();
    const expectedMovie2 = screen.queryByText(movie2.name);
    expect(expectedMovie2).not.toBeInTheDocument();
  });

  test("When prop movies is null, Should not display values", () => {
    render(<MovieTile movies={null} />);

    const expectedMovie1 = screen.queryByText(movie1.name);
    expect(expectedMovie1).not.toBeInTheDocument();
    const expectedMovie2 = screen.queryByText(movie2.name);
    expect(expectedMovie2).not.toBeInTheDocument();
  });
});
