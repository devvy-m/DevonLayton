import React, { ReactElement } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import logo from "src/app/media/customLogo512.png";
import "../AppHeader.scss";

const Navigation: React.FC = (): ReactElement => {
  return (
    <Navbar
      collapseOnSelect
      className="site-nav "
      id="nav-bar"
      expand="lg"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="navbar-collapse">
        <Nav id="site-nav" as="ul">
          <LinkContainer to="/DevonLayton">
            <Navbar.Brand  className="nav-link">
              <Image src={logo} className="App-logo" alt="logo" /> Devon Layton
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/DevonLayton/aboutme">
            <Nav.Link className="nav-link" >
              About Me
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/DevonLayton/projects">
            <Nav.Link className="nav-link">
              Projects
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/DevonLayton/contact">
            <Nav.Link className="nav-link" >
              Contact
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
