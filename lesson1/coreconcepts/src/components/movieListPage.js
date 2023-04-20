import React, { useState } from "react";

import Searcher from "./searcher";
import MovieDetails from "./movieDetails";
import AddMovieDialog from "./addMovieDialog";
import MovieTile from "./movieTile";
import SortMovies from "./sortMovies";
import DeleteMovieDialog from "./deleteMovieDialog";
import GenreSelector from "./genreSelector";

import { MoviesListDefault } from "../models/moviesListDefault";
import { GenreListDefault } from "../models/genreListDefault";

export default function MovieListPage() {
  const [selectedMovie, setSelectedMovie] = useState();
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
  const [moviesList] = useState(MoviesListDefault);
  const [filteredMovieList, setFilteredMovieList] = useState(MoviesListDefault);
  const [editedMovie, setEditedMovie] = useState(null);
  const [deletedMovie, setDeletedMovie] = useState(null);
  const [isDeleteMovieOpen, setIsDeleteMovieOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleOnSaveMovie = (e) => {
    const entries = [...new FormData(e.target).entries()];
    let newGenres = [];
    entries.forEach((i) => {
      if (i[0] === "genre") {
        newGenres.push(i[1]);
      }
    });

    let formObject = Object.fromEntries(entries);
    formObject.genre = [...newGenres];
    console.log(formObject);
    e.preventDefault();
  };

  const handleOnMovieSearch = (searchString) => {
    let titleSorted = [...moviesList].filter(function (item) {
      return (
        item.name.toLowerCase().includes(searchString.toLowerCase()) ||
        item.description.toLowerCase().includes(searchString.toLowerCase())
      );
    });
    setFilteredMovieList(titleSorted);
    setSelectedGenre("");

    if (searchString === "") {
      setFilteredMovieList(null);
      setSelectedGenre("");
    }
  };

  const handleOnGenreSelect = (selected) => {
    if (selected === selectedGenre) {
      setFilteredMovieList([...moviesList]);
      setSelectedGenre("");
      return;
    }

    let titleSorted = [...moviesList].filter(function (item) {
      return item.genres.includes(selected);
    });
    setFilteredMovieList(titleSorted);
    setSelectedGenre(selected);
  };

  const handleOnClickMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleOnEditMovie = (movie) => {
    setEditedMovie(movie);
    setIsAddMovieOpen(true);
  };

  const handleOnDeleteMovie = (id) => {
    setDeletedMovie(id);
    setIsDeleteMovieOpen(true);
  };

  const handleOnSubmitDeleteMovie = (e, movieId) => {
    console.log(movieId);
    e.preventDefault();
  };

  const handleOnSort = (option) => {
    option === "Title" ? sortByTitle() : sortByYear();
    setSelectedMovie(null);
  };

  const sortByTitle = () => {
    let movies = filteredMovieList ?? moviesList;
    let titleSorted = [...movies].sort(function (a, b) {
      return a.name < b.name ? -1 : 1;
    });
    setFilteredMovieList(titleSorted);
  };

  const sortByYear = () => {
    let movies = filteredMovieList ?? moviesList;
    let yearSorted = [...movies].sort(function (a, b) {
      return a.release_year - b.release_year;
    });
    setFilteredMovieList(yearSorted);
  };

  const filteredMoviesFound = () => {
    let movies = filteredMovieList ?? moviesList;
    let pluralChar = "s";
    if (movies.length === 1) {
      pluralChar = "";
    }

    return (
      <>
        <span className="fw-bold">{movies.length}</span>
        {" movie" + pluralChar + " found"}
      </>
    );
  };

  return (
    <>
      <div className="container-fluid bg-black text-light">
        <div
          title="movie-container-header"
          className="row justify-content-center"
        >
          <div className="col-10" style={{ height: "450px" }}>
            <div className="row align-items-center" style={{ height: "50px" }}>
              <div className="col-1 ">App</div>
              <div className="col-2 offset-8">
                <button
                  type="button"
                  className="add-movie-button text-uppercase fs-6"
                  title="btn-add-movie"
                  onClick={() => setIsAddMovieOpen(true)}
                >
                  + Add Movie
                </button>
                {isAddMovieOpen && (
                  <AddMovieDialog
                    isOpen={true}
                    onClose={() => {
                      setIsAddMovieOpen(false);
                      setEditedMovie(null);
                    }}
                    onSubmit={handleOnSaveMovie}
                    movie={editedMovie}
                  />
                )}
              </div>
            </div>
            <div className="row" style={{ height: "400px" }}>
              <div className="col-11 ">
                {selectedMovie ? (
                  <MovieDetails
                    movie={selectedMovie}
                    maxImageHeight={"350px"}
                  ></MovieDetails>
                ) : (
                  <>
                    <br />
                    <br />
                    <h3 className="lead text-uppercase fs-2 light">
                      {"Find your Movie"}
                    </h3>
                    <br />
                    <Searcher
                      key={"hello"}
                      onSearch={handleOnMovieSearch}
                      textClassName={"search-input-text"}
                      buttonClassName={"search-button text-uppercase"}
                    ></Searcher>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={{ height: "50px" }}>
          <div className="col-8">
            <GenreSelector
              genreList={GenreListDefault}
              selectedGenre={selectedGenre}
              onSelect={handleOnGenreSelect}
            ></GenreSelector>
          </div>
          <div className="col-2">
            <SortMovies onSort={handleOnSort} selectClassName=""></SortMovies>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "3px" }}
        >
          <div className="col-10  fs-5">{filteredMoviesFound()}</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <MovieTile
              movies={filteredMovieList ?? moviesList}
              onClick={handleOnClickMovie}
              onEdit={handleOnEditMovie}
              onDelete={handleOnDeleteMovie}
            ></MovieTile>
            {isDeleteMovieOpen && (
              <DeleteMovieDialog
                isOpen={true}
                onClose={() => {
                  setIsDeleteMovieOpen(false);
                  setDeletedMovie(null);
                }}
                onSubmit={handleOnSubmitDeleteMovie}
                movieId={deletedMovie}
              />
            )}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 ">App</div>
        </div>
      </div>
    </>
  );
}
