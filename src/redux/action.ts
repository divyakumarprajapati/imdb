import { DispatchType, FETCH_MOVIES, FETCH_MOVIE_DESCRIPTION } from "./types";
import axios from "axios";
import { Movie } from "../types";
import { BASE_URL } from "../config";

const getMovieDescription = (movie: Movie) => {
  return {
    type: FETCH_MOVIE_DESCRIPTION,
    payload: movie,
  };
};

const getMovies = (movies: Movie[]) => {
  return {
    type: FETCH_MOVIES,
    payload: movies,
  };
};

export const fetchMovieDescription = (id: number) => {
  return async function (dispatch: DispatchType) {
    await axios
      .get(`${BASE_URL}/movie/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
        },
      })
      .then((res) => {
        dispatch(getMovieDescription(res.data));
      })
      .catch((err) => console.error(err));
  };
};

export const fetchMovies = (search?: string) => {
  return async function (dispatch: DispatchType) {
    axios
      .get(`${BASE_URL}/movie/popular`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
        },
      })
      .then((res) => {
        dispatch(getMovies(res.data.results));
      })
      .catch((err) => console.error(err));
  };
};
