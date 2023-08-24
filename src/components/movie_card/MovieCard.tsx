import React from "react";
import Card from "react-bootstrap/Card";
import { Movie } from "../../types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;
  return (
    <Card>
      <Card.Img variant="top" src={movie.image_url} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <strong>Rating:</strong> {movie.rating}/10
        </Card.Text>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
