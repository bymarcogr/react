import React, { useState, useEffect, useContext } from "react";
import AddMovieDialog from "./addMovieDialog";
import {
  useParams,
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
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

  useEffect(() => {
    Axios.get(`${baseUrl}/${movieId}`)
      .then((response) => {
        console.log(response);
        let movie = response?.data;
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
        onSubmit={handleOnSaveMovie}
        movie={selectedMovie}
      />
    </>
  );
}
