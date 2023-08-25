import React, { Dispatch, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API_IMG } from "../../config";
import { fetchMovieDescription } from "../../redux/action";
import { Movie } from "../../types";

const DetailsPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDescription(parseInt(id || "1")));
  }, [dispatch, id]);
  const state = useSelector(
    (state: { movieReducer: { selectedMovie: Movie } }) => state.movieReducer
  );
  const { selectedMovie } = state;

  return (
    selectedMovie && (
      <Card>
        <Card.Img variant="top" src={API_IMG + selectedMovie.poster_path} />
        <Card.Body>
          <Card.Subtitle style={{ height: "40px", overflowY: "clip" }}>
            {selectedMovie.title}
          </Card.Subtitle>
          <Card.Text>
            <strong>Rating:</strong> {selectedMovie.vote_average}/10
          </Card.Text>
          <Card.Text style={{ maxHeight: "50px", overflowY: "clip" }}>
            {selectedMovie.overview}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  );
};

export default DetailsPage;
