import React, { ReactElement } from 'react';
import { Nav } from 'react-bootstrap';
import { Flower1, Github, Linkedin } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import styles from 'src/app/appFooter/Footer.module.scss';

export const Footer: React.FC = (): ReactElement => {
  const history = useHistory();

  return (
    <Nav className={`justify-content-center fixed-bottom ${styles.AppFooter}`}>
      <Nav.Item className={styles.footerLink}>
        <Nav.Link className={styles.footerLink} onClick={() => history.push('/')}>
          <Flower1 />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={styles.footerLink}
          href="https://www.linkedin.com/in/devonlayton017/"
          target="linkedin"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          className={styles.footerLink}
          href="https://github.com/devvy-m"
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
