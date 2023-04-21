import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieTile from "../../../components/movieTile";
import { MoviesListDefault } from "../../../models/moviesListDefault";

describe("MoviesContainer", () => {
  const movie1 = MoviesListDefault[8];
  const movie2 = MoviesListDefault[0];

  test("When prop movies is defined, Should display values", () => {
    render(
      <MovieTile
        movies={[movie2, movie1]}
        onClick={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    const expectedMovie1 = screen.getByTitle("movie-9");
    expect(expectedMovie1).toHaveTextContent(movie1.title);
    expect(expectedMovie1).toHaveTextContent(movie1.formatedDate);
    expect(expectedMovie1).toHaveTextContent(movie1.formatedGenres);
    const expectedMovie2 = screen.getByTitle("movie-1");
    expect(expectedMovie2).toHaveTextContent(movie2.title);
    expect(expectedMovie2).toHaveTextContent(movie2.formatedDate);
    expect(expectedMovie2).toHaveTextContent(movie2.formatedGenres);
  });

  test("When prop movies is not defined, Should not display values", () => {
    render(<MovieTile movies={undefined} />);

    const expectedMovie1 = screen.queryByText(movie1.title);
    expect(expectedMovie1).not.toBeInTheDocument();
    const expectedMovie2 = screen.queryByText(movie2.title);
    expect(expectedMovie2).not.toBeInTheDocument();
  });

  test("When prop movies is null, Should not display values", () => {
    render(<MovieTile movies={null} />);

    const expectedMovie1 = screen.queryByText(movie1.title);
    expect(expectedMovie1).not.toBeInTheDocument();
    const expectedMovie2 = screen.queryByText(movie2.title);
    expect(expectedMovie2).not.toBeInTheDocument();
  });
});
