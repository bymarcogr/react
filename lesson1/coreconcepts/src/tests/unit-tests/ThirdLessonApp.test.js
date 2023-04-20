import { render, screen } from "@testing-library/react";
import ThirdLessonApp from "../../components/thirdLessonApp";

describe("ThirdLessonApp", () => {
  test("renders Container Component", () => {
    render(<ThirdLessonApp />);
    expect(screen.getByText(/Third Lesson/i)).toBeInTheDocument();
    expect(screen.getByTitle("sort-by-select")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Title")).toBeInTheDocument();
  });

  test("renders Tile Component", () => {
    render(<ThirdLessonApp />);
    expect(screen.getByTitle("movie-1")).toBeInTheDocument();
    expect(screen.getByText(/The Humanity Bureau/i)).toBeInTheDocument();
    expect(screen.getByTestId("movie-genres-1")).toBeInTheDocument();
    expect(screen.getByTestId("options-movie-1")).toBeInTheDocument();
    expect(screen.getByTitle("movie-16")).toBeInTheDocument();
    expect(
      screen.getByText(/Harry Potter and the Deathly Hallows: Part 2/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId("movie-genres-16")).toBeInTheDocument();
    expect(screen.getByTestId("options-movie-16")).toBeInTheDocument();
  });
});
