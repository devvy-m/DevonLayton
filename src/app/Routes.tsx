import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AboutPage from "./appBody/about/AboutPage";
import Contact from "./appBody/contact/Contact";
import Projects from "./appBody/projects/Projects";

export const Routes: React.FC = () => {
  return (
    <Switch>

      <Route
        path={["/devonlayton/aboutme", "#/aboutme"]}
        exact={true}
        component={AboutPage}
      />

      <Route
        path={["/devonlayton/projects", "#/projects"]}
        exact={true}
        component={Projects}
      />
      <Route
        path={["/devonlayton/contact", "#/contact"]}
        exact={true}
        component={Contact}
      />
      <Redirect to={"/devonlayton"} />
    </Switch>
  );
};
