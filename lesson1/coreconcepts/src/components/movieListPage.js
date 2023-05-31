import React, { useState, useEffect, useContext } from "react";
import {
  useSearchParams,
  Outlet,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import MovieTile from "./movieTile";
import SortMovies from "./sortMovies";
import GenreSelector from "./genreSelector";
import { MovieInfo } from "../models/movieInfo";
import { useAppContext } from "./appContext";

import { GenreListDefault } from "../models/genreListDefault";
import Axios from "axios";

export default function MovieListPage() {
  const { config } = useAppContext();
  const baseUrl = config.url;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [moviesList, setMoviesList] = useState([]);

  const [searchString, setSearchString] = useState(
    searchParams.get("searchBy") === "title" ? searchParams.get("search") : ""
  );
  const [selectedGenre, setSelectedGenre] = useState(
    searchParams.get("searchBy") === "genres" ? searchParams.get("search") : ""
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") ?? "");

  const handleOnGenreSelect = (selected) => {
    if (selected === selectedGenre) {
      setSelectedGenre("");
      return;
    }
    setSelectedGenre(selected);
    setSearchString("");
  };

  const handleOnClickMovie = (movie) => {
    navigate(`/${movie.id}/?${createSearchParams(searchParams).toString()}`);
    window.scrollTo(0, 0);
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

  const axiosParams = () => {
    let params = {};

    if (searchString !== "") {
      params["search"] = searchString;
      params["searchBy"] = "title";
    }

    if (selectedGenre !== "") {
      params["search"] = selectedGenre;
      params["searchBy"] = "genres";
    }

    params["sortBy"] = sortBy !== "" ? sortBy : "title";
    params["sortOrder"] = "asc";
    params["limit"] = 20;
    setSearchParams(params);

    return params;
  };

  useEffect(() => {
    Axios.get(baseUrl, {
      params: axiosParams(),
    })
      .then((response) => {
        let movies = [];
        movies = response?.data?.data.map((movie) => new MovieInfo(movie));
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
          <div className="col-lg-10">
            <div className="row align-items-center">
              <div className="col-lg-1 ">App</div>
              <div className="col-lg-2 offset-8">
                <button
                  type="button"
                  className="add-movie-button text-uppercase fs-6"
                  title="btn-add-movie"
                  onClick={() => {
                    navigate(
                      `/new/?${createSearchParams(searchParams).toString()}`
                    );
                    window.scrollTo(0, 0);
                  }}
                >
                  + Add Movie
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-10 ">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-12">
            <GenreSelector
              genreList={GenreListDefault}
              selectedGenre={selectedGenre}
              onSelect={handleOnGenreSelect}
            ></GenreSelector>
          </div>
          <div className="col-lg-2 col-sm-12">
            <SortMovies onSort={handleOnSort} selectClassName=""></SortMovies>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "3px" }}
        >
          <div
            title="movies-counter-found"
            className="col-lg-10 col-sm-12 fs-5 position-sticky"
          >
            {filteredMoviesFound()}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-sm-12">
            <MovieTile
              movies={moviesList}
              onClick={handleOnClickMovie}
            ></MovieTile>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 ">App</div>
        </div>
      </div>
    </>
  );
}
