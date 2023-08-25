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

const getMovies = (payload: {
  page: number;
  total_pages: number;
  movies: Movie[];
}) => {
  return {
    type: FETCH_MOVIES,
    payload: payload,
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

export const fetchMovies = (params?: { search?: string; page?: number }) => {
  return async function (dispatch: DispatchType) {
    const api_url =
      BASE_URL +
      (params?.search && params.search !== ""
        ? "/search/movie"
        : "/movie/popular");
    axios
      .get(api_url, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          query: params?.search,
          page: params?.page,
        },
      })
      .then((res) => {
        const payload = {
          page: res.data.page,
          total_pages: res.data.total_pages,
          movies: res.data.results,
        };
        dispatch(getMovies(payload));
      })
      .catch((err) => console.error(err));
  };
};
