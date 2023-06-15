import Axios from "axios";
import { MovieInfo } from "../models/movieInfo";

export const getMovieList = (url, params) => {
  return Axios.get(url, {
    params: params,
  })
    .then((response) =>
      response?.data?.data.map((movie) => new MovieInfo(movie))
    )
    .catch((error) => {
      throw error;
    });
};
