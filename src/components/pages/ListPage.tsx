import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/action";
import { Movie } from "../../types";
import MovieGrid from "../movie_card_grid/MovieCardGrid";

const ListPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  dispatch(fetchMovies());

  const state = useSelector(
    (state: { movieReducer: { movies: Movie[] } }) => state.movieReducer
  );
  return (
    <div>
      <MovieGrid movies={state.movies} />
    </div>
  );
};

export default ListPage;
