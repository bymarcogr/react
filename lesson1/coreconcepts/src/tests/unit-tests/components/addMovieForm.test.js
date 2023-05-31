import React from "react";
import Router from "react-router";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import AddMovieForm from "../../../components/addMovieForm";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../../../components/appContext";
import { act } from "react-dom/test-utils";

const testContextValue = {
  config: {
    url: "http://dummy/movies",
  },
};

jest.mock("axios");

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useParams: jest.fn(),
}));

const movie = {
  id: 4,
  title: "Star Wars: The Last Jedi",
  release_date: new Date("2017-01-01T03:24:00"),
  poster_path:
    "https://m.media-amazon.com/images/M/MV5BOTgxYzA5YTUtOGI4NC00NzYyLTk2YzYtYzUwMWUxZGJmNzRhXkEyXkFqcGdeQXVyNzQ0MDUyMzg@._V1_.jpg",
  genres: ["Action", "Adventure", "Fantasy"],
  vote_average: 7.4,
  runtime: 152,
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
};

describe("AddMovieForm", () => {
  test("When prop isOpen is true, Should display AddMovie Dialog", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ movieId: null });

    await act(async () => {
      render(
        <AppContext.Provider value={testContextValue}>
          <BrowserRouter>
            <AddMovieForm isOpen={true} />
          </BrowserRouter>
        </AppContext.Provider>
      );
    });

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

  test("When prop isOpen is false, Should not display AddMovie Dialog", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ movieId: null });

    await act(async () => {
      render(
        <AppContext.Provider value={testContextValue}>
          <BrowserRouter>
            <AddMovieForm isOpen={false} />
          </BrowserRouter>
        </AppContext.Provider>
      );
    });
    const expectedMovie = screen.queryByText(/Add Movie/i);
    expect(expectedMovie).not.toBeInTheDocument();
  });

  test("When param MovieId is sent , Should display Edit Movie Dialog", async () => {
    axios.get.mockResolvedValueOnce({
      data: movie,
    });
    jest.spyOn(Router, "useParams").mockReturnValue({ movieId: 1 });

    const setState = jest.fn();

    jest
      .spyOn(React, "useState")
      .mockImplementationOnce((movie) => [movie, setState]);

    await act(async () => {
      render(
        <AppContext.Provider value={testContextValue}>
          <BrowserRouter>
            <AddMovieForm isOpen={true} />
          </BrowserRouter>
        </AppContext.Provider>
      );
    });
    const expectedMovie = screen.queryByText(/Add Movie/i);
    expect(expectedMovie).not.toBeInTheDocument();

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
