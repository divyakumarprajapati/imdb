import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/action";
import { Movie } from "../../types";
import MovieCardGrid from "../movie_card_grid/MovieCardGrid";

const ListPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const state = useSelector(
    (state: {
      movieReducer: { movies: Movie[]; page: number; total_pages: number };
    }) => state.movieReducer
  );
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <MovieCardGrid
        movies={state.movies}
        page={state.page}
        total_pages={state.total_pages}
        handlePagination={(page) => {
          dispatch(fetchMovies({ page: page }));
        }}
      />
    </div>
  );
};

export default ListPage;
