import React from "react";
import "./NavBar.css";
import { Navbar, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import AirplaneLogo from "../../Assets/Icons/airplane.svg";
function NavBar() {
  return (
    <Navbar expand="lg" className="position-absolute w-100 z-2">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">
          {" "}
          <Link to="/" className="text-decoration-none text-light d-flex">
            <img className="me-2" src={AirplaneLogo} alt="logo" />
            Travel & Tourisum
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto w-100 justify-content-center">
            <Nav.Link href="/" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="/holidays" className="text-light">
              Holidays
            </Nav.Link>
            <Nav.Link href="/destinations" className="text-light">
              Destinations
            </Nav.Link>
          </Nav>
          <Form className="  form d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" input me-2"
              aria-label="Search"
            />
            <Button className="button" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
