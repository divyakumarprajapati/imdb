import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../movie_card/MovieCard";
import { Movie } from "../../types";
import { PaginationControl } from "react-bootstrap-pagination-control";

interface MovieGridProps {
  movies: Movie[];
  page: number;
  total_pages: number;
  handlePagination: (page: number) => void;
}

const MovieCardGrid = (props: MovieGridProps) => {
  const { movies } = props;
  return (
    <Container className="my-2">
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} sm={6} md={4} lg={2} className="my-1">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
      <PaginationControl
        page={props.page}
        between={4}
        total={props.total_pages}
        limit={20}
        changePage={(page) => {
          props.handlePagination(page);
        }}
        ellipsis={1}
      />
    </Container>
  );
};

export default MovieCardGrid;
