import React, { Dispatch, useState } from "react";
import { Navbar, Container, Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch: Dispatch<any> = useDispatch();

  const [search, setSearch] = useState("");

  return (
    <Navbar className="shadow-sm">
      <Container className="justify-content-between">
        <Navbar.Brand href="#list">Movies</Navbar.Brand>

        {location.pathname !== "/list" ? (
          <Button
            variant="link"
            onClick={() => navigate("/list", { replace: true })}
          >
            Back to Home
          </Button>
        ) : (
          <Form.Control
            name="search"
            placeholder="Search"
            style={{ width: "300px" }}
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              dispatch(fetchMovies({ search: event.target.value }));
            }}
            required
          />
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
