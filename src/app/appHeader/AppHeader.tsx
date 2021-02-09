import React, { ReactElement } from "react";
import AboutPage from "../appBody/about/AboutPage";
import Contact from "../appBody/contact/Contact";
import Projects from "../appBody/projects/Projects";
import Footer from "./components/Footer";

import "./AppHeader.scss";
import Navigation from "./components/Navigation";

const AppHeader: React.FC = (): ReactElement => {
  return (
    <>

      <div
        className="nav-scroll"
        data-bs-spy="scroll"
        data-bs-target="#site-nav"
        data-bs-offset="0"
        tabIndex={0}
      >
              <Navigation />
      </div>
    </>
  );
};

export default AppHeader;
