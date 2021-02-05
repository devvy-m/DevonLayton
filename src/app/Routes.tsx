import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";


export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/projects" exact={true} component={Projects} />
      <Route path="/aboutme" exact={true} component={AboutPage} />
      <Route path="/contact" exact={true} component={Contact} />
      <Redirect to={"/home"} />
    </Switch>
  );
};