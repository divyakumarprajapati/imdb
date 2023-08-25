import { Movie } from "../types";
import {
  FETCH_MOVIES,
  FETCH_MOVIE_DESCRIPTION,
  InitialState,
  MovieAction,
} from "./types";

const initialState: InitialState = {
  page: 1,
  total_pages: 1,
  selectedMovie: {} as Movie,
  movies: [] as Movie[],
};

const movieReducer = (state = initialState, action: MovieAction) => {
  switch (action.type) {
    case FETCH_MOVIES:
      const payload = action.payload as {
        movies: Movie[];
        page: number;
        total_pages: number;
      };
      return {
        ...state,
        movies: payload.movies,
        page: payload.page,
        total_pages: payload.total_pages,
      };

    case FETCH_MOVIE_DESCRIPTION:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
