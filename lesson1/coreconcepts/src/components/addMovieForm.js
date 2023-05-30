import React, { useState, useEffect, useContext } from "react";
import AddMovieDialog from "./addMovieDialog";
import {
  useParams,
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { MovieInfo } from "../models/movieInfo";
import { AppContext } from "../../src/App";
import Axios from "axios";

export default function AddMovieForm({ isOpen }) {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(isOpen);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams({});
  const { movieId } = useParams();

  const { config } = useContext(AppContext);
  const baseUrl = config.url;

  const isNew = () => {
    return movieId == null;
  };

  const handleOnSubmit = (data) => {
    if (isNew()) {
      handleOnSaveMovie(data);
    } else {
      handleOnUpdateMovie(data);
    }
  };
  const handleOnSaveMovie = (data) => {
    const movie = new MovieInfo(data);
    var customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    Axios.post(`${baseUrl}`, movie, customConfig)
      .then((response) => {
        navigate(
          `/${response?.data?.id}/?${createSearchParams(
            searchParams
          ).toString()}`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnUpdateMovie = (data) => {
    console.log(data);
    const movie = new MovieInfo(data);
    var customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    Axios.put(`${baseUrl}`, movie, customConfig)
      .then((response) => {
        navigate(
          `/${response?.data?.id}/?${createSearchParams(
            searchParams
          ).toString()}`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Axios.get(`${baseUrl}/${movieId}`)
      .then((response) => {
        const movie = new MovieInfo(response?.data);
        setSelectedMovie(movie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [baseUrl, movieId]);

  return (
    <>
      <AddMovieDialog
        isOpen={isAddMovieOpen}
        onClose={() => {
          setIsAddMovieOpen(false);
          navigate(`/?${createSearchParams(searchParams).toString()}`);
          window.scrollTo(0, 0);
        }}
        onSubmit={handleOnSubmit}
        movie={selectedMovie}
      />
    </>
  );
}
