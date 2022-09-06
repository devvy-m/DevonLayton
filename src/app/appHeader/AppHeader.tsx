import React, { ReactElement, useState } from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Contact from 'src/app/appBody/contact/Contact';
import logo from 'src/app/media/customLogo512.png';
import styles from 'src/app/appHeader/AppHeader.module.scss';

const AppHeader: React.FC = (): ReactElement => {
  const history = useHistory();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className={styles.AppHeader}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={styles.siteNav} fixed="top">
        <Navbar.Brand onClick={() => history.push('/')}>
          <Image src={logo} className="AppLogo" alt="logo" />
          {'Devon Layton'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item id="about" aria-label="about">
              <Nav.Link className={styles.navLink} onClick={() => history.push('/aboutme')}>
                About Me
              </Nav.Link>{' '}
            </Nav.Item>
            <Nav.Item id="projects" aria-label="projects">
              <Nav.Link className={styles.navLink} onClick={() => history.push('/projects')}>
                Projects
              </Nav.Link>{' '}
            </Nav.Item>
            <Nav.Item id="contact" aria-label="contact">
              <Nav.Link
                className={styles.navLink}
                onClick={() => {
                  setContactModalOpen(!contactModalOpen);
                }}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        {contactModalOpen && (
          <Contact showModal={contactModalOpen} onHide={() => setContactModalOpen(!contactModalOpen)} />
        )}
      </Navbar>
    </div>
  );
};

export default AppHeader;
