import React, { ReactElement, useState } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { LinkContainer } from "react-router-bootstrap";
import Contact from "src/app/appBody/contact/Contact";

import logo from "src/app/media/customLogo512.png";
import "../AppHeader.scss";

const Navigation: React.FC = (): ReactElement => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  if (contactModalOpen) {
    return <Contact
    showModal={contactModalOpen}
    onHide={() => setContactModalOpen(!contactModalOpen)}
  />
  }

  return (
    <Navbar
      collapseOnSelect
      className="site-nav "
      id="nav-bar"
      expand="lg"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <LinkContainer to="/DevonLayton">
        <Navbar.Brand className="nav-link">
          {/* <Image src={logo} className="App-logo" alt="logo" />  */}
          Devon Layton
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Collapse className="navbar-collapse">
        <Nav id="site-nav" as="ul">
          <LinkContainer to="/DevonLayton/aboutme">
            <Nav.Item className="nav-link">About Me</Nav.Item>
          </LinkContainer>
          <LinkContainer to="/DevonLayton/projects">
            <Nav.Item className="nav-link">Projects</Nav.Item>
          </LinkContainer>
          {/* <Nav.Link className="nav-link" id="contact" onClick={(e)=>{alert(`"${e.target.id} clicked"`); return <Contact isShow={true} />}}> */}
          {/* <LinkContainer
            to={"#contact"}
            className="nav-link"
            onClick={(e) => {
              setContactModalOpen(!contactModalOpen);
            }}
          >
            <Contact
              showModal={contactModalOpen}
              onHide={() => setContactModalOpen(!contactModalOpen)}
            />
          </LinkContainer> */}
          <Nav.Item
            className="nav-link"
            id="contact"
            onClick={(e) => {
              setContactModalOpen(!contactModalOpen);
            }}
          >
            {" "}
            Contact
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
