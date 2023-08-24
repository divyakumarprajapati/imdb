import { DispatchType, FETCH_MOVIES, FETCH_MOVIE_DESCRIPTION } from "./types";
import axios from "axios";
import { Movie } from "../types";

const API = "https://api.themoviedb.org/3";

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
      .get(`${API}/movie/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => dispatch(getMovieDescription(res.data)))
      .catch((err) => console.error(err));
  };
};

export const fetchMovies = (search?: string) => {
  return async function (dispatch: DispatchType) {
    axios
      .get(`${API}/trending/movie`, {
        headers: {
          "Content-Type": "application/json",
          api_key: "94e4d834821a0e42ec7ccbeeb4674a18",
        },
      })
      .then((res) => dispatch(getMovies(res.data.premiums)))
      .catch((err) => console.error(err));
  };
};
