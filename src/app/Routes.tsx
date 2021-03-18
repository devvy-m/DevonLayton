import React, {useState} from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AboutPage from "./appBody/about/AboutPage";
import Contact from "./appBody/contact/Contact";
import Projects from "./appBody/projects/Projects";
import Home from "./appBody/home/Home";

export const Routes: React.FC = () => {
  const isShow=useState(false);
  return (
    <Switch>
    <Route
        path={"/DevonLayton/"}
        exact={true}
        component={Home}
      />  
      <Route
        path={"/DevonLayton/aboutme"}
        exact={true}
        component={AboutPage}
      />
      <Route
        path={'/DevonLayton/projects'}
        exact={true}
        component={Projects}
      />
      {/* <Route
        path={"#contact"}
      /> */}
      <Redirect to={"/DevonLayton"} />
    </Switch>
  );
};
