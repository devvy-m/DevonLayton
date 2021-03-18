import React, { ReactElement } from "react";
import { Media } from "react-bootstrap";
import "./Home.scss";
const Home: React.FC = (): ReactElement => {
  return (
    <div className="homeHeader" id="home">
        <h2>
        {"Hello World"}

        </h2>
        <Media className="homeBody">
        Hey there!

        {/* subsection  */}
            <p>

             <br/>
                I am Devon 
                <br />
                {"PlaceHolder Text ....."}
                </p>

        </Media>

    </div>
  );
};

export default Home;