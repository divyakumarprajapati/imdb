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
      <Card className="d-flex flex-row ">
        <Card.Img
          variant="top"
          src={API_IMG + selectedMovie.poster_path}
          className="w-25 my-3 mx-3"
        />
        <div className="d-flex flex-column  w-25 my-3">
          <Card.Title>{selectedMovie.title}</Card.Title>
          <Card.Text>
            <strong>Rating:</strong> {selectedMovie.vote_average}/10
          </Card.Text>
          <Card.Text>Release Date: {selectedMovie.release_date}</Card.Text>
          <Card.Text>Length: {selectedMovie.runtime} mins</Card.Text>
          <Card.Text>{selectedMovie.overview}</Card.Text>
        </div>
      </Card>
    )
  );
};

export default DetailsPage;
