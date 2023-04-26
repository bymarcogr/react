import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  useParams,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

import { MovieInfo } from "../models/movieInfo";
import { AppContext } from "../../src/App";
import MovieDetails from "./movieDetails";

import Axios from "axios";

export default function MovieDetailsWrapper() {
  const [searchParams] = useSearchParams({});
  const [selectedMovie, setSelectedMovie] = useState();
  const { config } = useContext(AppContext);
  const baseUrl = config.url;
  const navigate = useNavigate();

  const { movieId } = useParams();

  useEffect(() => {
    Axios.get(`${baseUrl}/${movieId}`)
      .then((response) => {
        setSelectedMovie(new MovieInfo(response?.data));
      })
      .catch((error) => {
        console.log(error);
        navigate("/notfound");
      });
  }, [baseUrl, movieId]);

  return (
    <MovieDetails
      movie={selectedMovie}
      maxImageHeight={"400px"}
      onClose={() => {
        navigate(`/?${createSearchParams(searchParams).toString()}`);
      }}
    ></MovieDetails>
  );
}
