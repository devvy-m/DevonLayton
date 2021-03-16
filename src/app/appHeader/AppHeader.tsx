import React, { ReactElement } from "react";
import Navigation from "./components/Navigation";
import "./AppHeader.scss";
import Footer from "./components/Footer";

const AppHeader: React.FC = (): ReactElement => {
  return (
    <div className={"App-header"}>
      <Navigation />
      <Footer />
    </div>
  );
};

export default AppHeader;
