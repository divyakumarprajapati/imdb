import { Movie } from "../types";
import {
  FETCH_MOVIES,
  FETCH_MOVIE_DESCRIPTION,
  InitialState,
  MovieAction,
} from "./types";

const initialState: InitialState = {
  selectedMovie: {} as Movie,
  movies: [] as Movie[],
};

const movieReducer = (state = initialState, action: MovieAction) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
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
