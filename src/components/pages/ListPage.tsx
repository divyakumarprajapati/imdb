import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/action";
import { Movie } from "../../types";
import MovieCardGrid from "../movie_card_grid/MovieCardGrid";

const ListPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const state = useSelector(
    (state: { movieReducer: { movies: Movie[] } }) => state.movieReducer
  );
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <MovieCardGrid movies={state.movies} />
    </div>
  );
};

export default ListPage;
