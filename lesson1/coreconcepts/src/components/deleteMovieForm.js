import React, { useState, useContext } from "react";

import DeleteMovieDialog from "./deleteMovieDialog";

import {
  useParams,
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { useAppContext } from "./appContext";
import Axios from "axios";

export default function DeleteMovieForm({ isOpen }) {
  const [isDeleteMovieOpen, setIsDeleteMovieOpen] = useState(isOpen);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams({});
  const { movieId } = useParams();

  const { config } = useAppContext();
  const baseUrl = config.url;

  const handleOnSubmitDeleteMovie = (e, movieId) => {
    Axios.delete(`${baseUrl}/${movieId}`)
      .then((response) => {
        console.log("movie deleted", response.status);
        navigate(`/?${createSearchParams(searchParams).toString()}`);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  return (
    <>
      <DeleteMovieDialog
        isOpen={isDeleteMovieOpen}
        onClose={() => {
          setIsDeleteMovieOpen(false);
          navigate(`/?${createSearchParams(searchParams).toString()}`);
          window.scrollTo(0, 0);
        }}
        onSubmit={handleOnSubmitDeleteMovie}
        movieId={movieId}
      />
    </>
  );
}
