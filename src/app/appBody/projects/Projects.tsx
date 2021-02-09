import React, { ReactElement } from "react";
import { BorderStyle } from "react-bootstrap-icons";

const Projects: React.FC = (): ReactElement => {
  return (
    <div className="nav-scroll">
      <h4 id="#/projects">Projects</h4>

      <p id="#/projects" className="nav-scroll">
        <BorderStyle style={{ color: "turquoise" }} />
        Threads of Magda interweaved with the shawl’s and the shawl gave her
        life. The shawl had many identities: a protective home, a cloak of
        warmth, a baby, a pet, a little sister. An entity that no person except
        she and Rosa could touch. After Rosa’s milk had vanished, the shawl
        nourished Magda. I would watch as she satiated her hunger by suckling
        the milk of linen out of its corners, absorbing its essence. Allowed
        only to peer in, I was an outsider to the bubble that was Rosa, Magda
        and the shawl. An outsider that could observe how Magda’s roundness with
        eyes blue as air and hair of yellow starlight contrasted against Rosa’s
        bleak, dark like cholera, complexion. Dragging one heavy step after
        another, I would study the blueness hidden in the warmth of the shawl.
        “Aryan” entered my mind during moments when, through the shroud of the
        shawl, the blue eyes caught mine. Once, when I was so exhausted, “Aryan”
        escaped my mind, flew from my lips, and penetrated the air. Rosa looked
        at me as if I was a predator ready to feast on its prey; I slunk further
        within myself.
      </p>
    </div>
  );
};

export default Projects;
