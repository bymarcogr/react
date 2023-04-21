import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoviesContainer from "../../../components/moviesContainer";
import { MoviesListDefault } from "../../../models/moviesListDefault";

describe("MoviesContainer", () => {
  const movie1 = MoviesListDefault[8];
  const movie2 = MoviesListDefault[0];

  test("When prop movies is defined, Should display values", () => {
    render(<MoviesContainer movies={[movie2, movie1]} />);

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
    render(<MoviesContainer movies={null} />);

    const expectedMovie1 = screen.queryByText(movie1.title);
    expect(expectedMovie1).not.toBeInTheDocument();
    const expectedMovie2 = screen.queryByText(movie2.title);
    expect(expectedMovie2).not.toBeInTheDocument();
  });

  test("When prop movies is null, Should not display values", () => {
    render(<MoviesContainer movies={null} />);

    const expectedMovie1 = screen.queryByText(movie1.title);
    expect(expectedMovie1).not.toBeInTheDocument();
    const expectedMovie2 = screen.queryByText(movie2.title);
    expect(expectedMovie2).not.toBeInTheDocument();
  });

  test("When Sort Select click Release Date, Should sort values", () => {
    render(<MoviesContainer movies={[movie2, movie1]} />);

    let sorted = screen.queryAllByTitle(/^movie-*/i);
    let item1 = sorted[0];
    let item2 = sorted[1];

    expect(item1.title).toContain("movie-1");
    expect(item2.title).toContain("movie-9");

    fireEvent.change(screen.getByTitle("sort-by-select"), {
      target: { value: "Release Date" },
    });
    expect(screen.getByTitle("sort-by-select").value).toBe("Release Date");

    sorted = screen.queryAllByTitle(/^movie-*/i);
    item1 = sorted[0];
    item2 = sorted[1];

    expect(item1.title).toContain("movie-9");
    expect(item2.title).toContain("movie-1");
  });
});
