import { Movie } from "../types";

export const FETCH_MOVIES = "FETCH_MOVIES";

export const FETCH_MOVIE_DESCRIPTION = "FETCH_MOVIE_DESCRIPTION";

export type InitialState = {
  page: number;
  total_pages: number;
  selectedMovie: Movie;
  movies: Movie[];
};

export type MovieAction = {
  type: string;
  payload: Movie | { movies: Movie[]; page: number; total_pages: number };
};

export type DispatchType = (args: MovieAction) => MovieAction;
