import React, { ReactElement } from 'react';
import { Media } from 'react-bootstrap';
import styles from 'src/app/appBody/home/Home.module.scss';

const Home: React.FC = (): ReactElement => {
  return (
    <div className={styles.homeHeader} id="home">
      <h2>{'Hello World'}</h2>
      <Media className={styles.homeBody}>
        Hey there!
        {/* subsection  */}
        <p>
          <br />
          I am Devon
          <br />
          {'PlaceHolder Text .....'}
        </p>
      </Media>
    </div>
  );
};

export default Home;
