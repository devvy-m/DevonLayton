import React, { ReactElement } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Flower1, Github, Linkedin } from "react-bootstrap-icons";

const Footer: React.FC = (): ReactElement => {
  return (
    // <Navbar id="site-nav" className="navbar navbar-dark bg-dark " expand="sm" variant="light">
    <Nav
    variant="tabs"
    id="site-nav"
  
  >
      <Nav.Item >
        <Flower1 style={{ color: "whitesmoke" }} />
        <Nav.Link
          className="Nav-link"
          href="https://www.linkedin.com/in/devonlayton017/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </Nav.Link>
        <Nav.Link
          className="Nav-link"
          href="https://github.com/Dml4h"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Footer;
