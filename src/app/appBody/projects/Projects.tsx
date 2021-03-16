import React, { ReactElement } from "react";
import { ConeStriped } from "react-bootstrap-icons";
import "./Projects.scss";

const Projects: React.FC = (): ReactElement => {
  return (
    <div className={'projectBody'}>
      <h4 id="/projects">Projects</h4>
      <ConeStriped style={{ color: "turquoise" }} />
    </div>
  );
};

export default Projects;
