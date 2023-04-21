import React, { useState, useEffect } from "react";

import Searcher from "./searcher";
import MovieDetails from "./movieDetails";
import AddMovieDialog from "./addMovieDialog";
import MovieTile from "./movieTile";
import SortMovies from "./sortMovies";
import DeleteMovieDialog from "./deleteMovieDialog";
import GenreSelector from "./genreSelector";
import { MovieInfo } from "../models/movieInfo";

import { GenreListDefault } from "../models/genreListDefault";
import Axios from "axios";

export default function MovieListPage() {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [editedMovie, setEditedMovie] = useState(null);
  const [deletedMovie, setDeletedMovie] = useState(null);
  const [isDeleteMovieOpen, setIsDeleteMovieOpen] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState();
  const [searchString, setSearchString] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("");

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

  const handleOnMovieSearch = (searchStr) => {
    setSearchString(searchStr);
    setSelectedGenre("");
  };

  const handleOnGenreSelect = (selected) => {
    if (selected === selectedGenre) {
      setSelectedGenre("");
      return;
    }
    setSelectedGenre(selected);
    setSearchString("");
  };

  const handleOnClickMovie = (movie) => {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
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
    option === "Title" ? setSortBy("title") : setSortBy("release_date");
  };

  const filteredMoviesFound = () => {
    let movies = moviesList;
    let pluralChar = "s";
    if (movies?.length === 1) {
      pluralChar = "";
    }

    return (
      <>
        <span className="fw-bold">{movies?.length}</span>
        {" movie" + pluralChar + " found"}
      </>
    );
  };

  const baseUrl = "http://localhost:4000/movies";

  const axiosParams = () => {
    let params = {};

    params["limit"] = 20;

    if (searchString !== "") {
      params["search"] = searchString;
      params["searchBy"] = "title";
    }

    if (selectedGenre !== "") {
      params["search"] = selectedGenre;
      params["searchBy"] = "genres";
    }

    if (sortBy !== "") {
      params["sortBy"] = sortBy;
      params["sortOrder"] = "asc";
    }

    return params;
  };

  useEffect(() => {
    Axios.get(baseUrl, {
      params: axiosParams(),
    })
      .then((response) => {
        let movies = [];
        response?.data?.data.forEach((movie) => {
          movies.push(new MovieInfo(movie));
        });
        setMoviesList([...movies]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchString, selectedGenre, sortBy]);

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
              <div className="col-12 ">
                {selectedMovie ? (
                  <MovieDetails
                    movie={selectedMovie}
                    maxImageHeight={"350px"}
                    onClose={() => setSelectedMovie(null)}
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
                      searchQuery={searchString}
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
              movies={moviesList}
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
