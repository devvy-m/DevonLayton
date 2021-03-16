import React, { ReactElement } from "react";

import { ConeStriped } from "react-bootstrap-icons";
import "./About.scss";
const AboutPage: React.FC = (): ReactElement => {
  return (
    <div className={"aboutBody"}>
      <h4 id="/aboutme">About me</h4>

        <ConeStriped style={{ color: "whitesmoke" }} />

    </div>
  );
};

export default AboutPage;
