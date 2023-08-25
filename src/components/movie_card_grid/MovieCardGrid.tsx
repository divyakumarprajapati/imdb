import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../movie_card/MovieCard";
import { Movie } from "../../types";

interface MovieGridProps {
  movies: Movie[];
}

const MovieCardGrid = (props: MovieGridProps) => {
  const { movies } = props;
  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieCardGrid;
