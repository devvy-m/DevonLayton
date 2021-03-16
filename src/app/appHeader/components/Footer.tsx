import React, { ReactElement } from "react";
import { Nav } from "react-bootstrap";
import { Flower1, Github, Linkedin } from "react-bootstrap-icons";

const Footer: React.FC = (): ReactElement => {
  return (
    <Nav className="justify-content-center fixed-bottom" variant="pills" as="ul" >
      <Nav.Item className="footer-link">
        <Nav.Link className="footer-link" as="span">
          <Flower1 />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className="footer-link"
          href="https://www.linkedin.com/in/devonlayton017/"
          target="linkedin"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          className="footer-link"
          href="https://github.com/Dml4h"
          target="github"
          rel="noopener noreferrer"
        >
          <Github />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Footer;
