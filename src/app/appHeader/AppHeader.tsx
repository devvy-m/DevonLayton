import React, { ReactElement, ReactNode } from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  Jumbotron,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
  Image,
} from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";
import logo from "src/app/customLogo512.png";
import "./AppHeader.scss";

const AppHeader: React.FC = (): ReactElement => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="home">
        <Image src={logo} className="App-logo" alt="logo" style={{
            padding: "10px",
          }}/>{" "}
        <Navbar.Brand
          style={{
            paddingLeft: "16px",
          }}
        >
          Devon Layton
        </Navbar.Brand>
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className="Nav-link"
            href="https://github.com/Dml4h/DevonLayton/tree/master"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </Nav.Link>
          <Nav.Link
            className="Nav-link"
            href="https://www.linkedin.com/in/devonlayton017/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppHeader;
