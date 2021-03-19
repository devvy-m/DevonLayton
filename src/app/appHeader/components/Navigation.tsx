import React, { ReactElement, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Contact from "src/app/appBody/contact/Contact";

// import logo from "src/app/media/customLogo512.png";
import "../AppHeader.scss";

const Navigation: React.FC = (): ReactElement => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  if (contactModalOpen) {
    return (
      <Contact
        showModal={contactModalOpen}
        onHide={() => setContactModalOpen(!contactModalOpen)}
      />
    );
  }

  return (
    // <Navbar
    //   collapseOnSelect
    //   className="site-nav "
    //   id="nav-bar"
    //   expand="lg"
    //   fixed="top"
    // >
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <LinkContainer to="/DevonLayton">
    //     <Navbar.Brand className="nav-link">
    //       {/* <Image src={logo} className="App-logo" alt="logo" />  */}
    //         {"Devon Layton"}
    //     </Navbar.Brand>
    //   </LinkContainer>
    //   <Navbar.Collapse className="navbar-collapse justify-content-end">
    //     <Nav className="mr-auto" id="site-nav" as="ul">
          // <LinkContainer to="/DevonLayton/aboutme">
          //   <Nav.Item className="nav-link">About Me</Nav.Item>
          // </LinkContainer>
          // <LinkContainer to="/DevonLayton/projects">
          //   <Nav.Item className="nav-link">Projects</Nav.Item>
          // </LinkContainer>

    //     </Nav>
    //   </Navbar.Collapse>
    //   <Nav>
    //   <Nav.Item
    //         className="nav-link"
    //         id="contact"
    //         onClick={(e) => {
    //           setContactModalOpen(!contactModalOpen);
    //         }}
    //       >
    //         {"Contact "}
    //       </Nav.Item>
    //   </Nav>

    // </Navbar>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="site-nav "
    fixed="top">

         <Navbar.Brand href="/DevonLayton" >
           {/* <Image src={logo} className="App-logo" alt="logo" />  */}
             {"Devon Layton"}
         </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/DevonLayton/aboutme" >About Me</Nav.Link>
            <Nav.Link href="/DevonLayton/projects">Projects</Nav.Link>

        </Nav>
        <Nav>
          <Nav.Item className="nav-link" id="contact">
            <Nav.Link
              eventKey={1}
              href="#contact"
              onClick={(e) => {
                setContactModalOpen(!contactModalOpen);
              }}
            >
              Contact
            </Nav.Link>

            {/* {"Contact "} */}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
