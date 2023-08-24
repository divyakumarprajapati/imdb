import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Navbar className="bg-info">
      <Container className="justify-content-between">
        <Navbar.Brand href="#list">Movies</Navbar.Brand>
        {location.pathname === "/details" && (
          <Button
            variant="link"
            onClick={() => navigate(`${location.pathname === "/list"}`)}
          >
            Back to Home
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
