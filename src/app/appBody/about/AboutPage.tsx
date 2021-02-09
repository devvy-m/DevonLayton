import { link } from "fs";
import React, { ReactElement } from "react";
import { BorderStyle } from "react-bootstrap-icons";

const AboutPage: React.FC = (): ReactElement => {
  return (
    <div className="nav-scroll">
      <h4 id="#/aboutme">About me</h4>

      <p id="#/aboutme">
        <BorderStyle style={{ color: "whitesmoke" }} />
        Each day in hell is cold, so very cold. I was fourteen, small, thin as a
        thread, and I walked. Always beside me was Rosa with Magda, who lived in
        a warm cocoon nestled against Rosa’s breasts. On and on, we marched down
        the road bounded by freshly dug ditches. At every step, icy claws
        pierced through the soles of my worn-down shoes, sinking an unyielding
        chill into my bones. I envied the baby Magda: wrapped in the shawl,
        swathed in Rosa’s existence, shielded from the drapes of smoke and
        snowing ash. Hunger gnawed a bottomless hole within me. I never shared
        my food and Rosa never shared with me. An insatiable dagger had plunged
        itself into my stomach, leaving me permanently starving. My growth had
        all but come to a standstill; even at fourteen, I still had not
        menstruated. Magda had drunk Rosa dry, only a drop was left of her. She
        no longer menstruated and rarely ate, giving most of her food to Magda.
        She was chronically in a trance, a mother reduced to a shell with room
        only for Magda.
      </p>
    </div>
  );
};

export default AboutPage;
