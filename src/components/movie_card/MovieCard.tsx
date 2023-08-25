import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { API_IMG } from "../../config";
import { Movie } from "../../types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`details`)}>
      <Card.Img variant="top" src={API_IMG + movie.poster_path} />
      <Card.Body>
        <Card.Subtitle style={{ height: "40px", overflowY: "clip" }}>
          {movie.title}
        </Card.Subtitle>
        <Card.Text>
          <strong>Rating:</strong> {movie.rating}/10
        </Card.Text>
        <Card.Text style={{ maxHeight: "50px", overflowY: "clip" }}>
          {movie.overview}
        </Card.Text>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => navigate(`details`)}
        >
          View
        </button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
