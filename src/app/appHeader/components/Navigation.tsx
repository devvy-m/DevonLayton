import React, { ReactElement } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";
import logo from "src/app/customLogo512.png";
import "../AppHeader.scss";

const Navigation: React.FC = (): ReactElement => {
  return (
    <Navbar id="site-nav" expand="md" variant="dark">
      {/* <Navbar id="site-nav" className="navbar navbar-light bg-light " expand="md"/> */}

      <Navbar.Collapse>
        <Nav
          className="justify-content-end"
          variant="pills"
          id="site-nav"
          as="ul"
        >
          {/* <Nav.Item> */}
            <Nav.Link
              // as="a"
              className="Nav-link"
              href={"/devonlayton"}
              style={{ color: "hotpink" }}
            >
              <Image src={logo} className="App-logo" alt="logo" />{" "}
            </Nav.Link>
          {/* </Nav.Item>
          <Nav.Item> */}
            <Nav.Link href={"/devonlayton"}>Devon Layton</Nav.Link>
          {/* </Nav.Item>
          <Nav.Item className="Nav-link"> */}
            <Nav.Link href={"/devonlayton/aboutme"}>About Me</Nav.Link>
          {/* </Nav.Item>
          <Nav.Item> */}
            <Nav.Link href={"/devonlayton/projects"}>Projects</Nav.Link>
          {/* </Nav.Item>
          <Nav.Item> */}
            <Nav.Link href={"/devonlayton/contact"}>Contact</Nav.Link>
          {/* </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
