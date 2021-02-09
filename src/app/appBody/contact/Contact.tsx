import React, { ReactElement } from "react";
import { BorderStyle } from "react-bootstrap-icons";

const Contact: React.FC = (): ReactElement => {
  return (
    <div className="nav-scroll">
      <h4 id="#/contact">Contact</h4>

      <p id="#/contact" className="nav-scroll">
        <BorderStyle style={{ color: "pink" }} />
        My existence consisted of walking and standing, perpetual hunger and
        cold; silent Magda existed in the hidden refuge of the shawl. Fires
        always kept the barracks cold. Nothing more than a collection of cold
        bones wrapped in tired skin, an isolated child in need of care, I slowly
        dwindled away. In one moment, the shawl whispered promises into my ears.
        Hugging my body, it wrapped its cocoon of warmth around me and lulled me
        to sleep. An animal backed into a corner, Rosa howled and tore away the
        warmth embracing my sleep. In a heavy-eyed haze, I watched her disappear
        into the square with the shawl flying around her. In one moment, Magda
        died, and all warmth vanished. The shawl had been Magda and now Magda
        was the shawl. Thrust back into the coldness, I watched Rosa devour each
        thread of the shawl.
      </p>
    </div>
  );
};

export default Contact;
