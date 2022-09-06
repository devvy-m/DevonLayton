import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AboutPage from './appBody/about/AboutPage';
import Contact from './appBody/contact/Contact';
import Projects from './appBody/projects/Projects';
import Home from './appBody/home/Home';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={'/'} exact={true} component={Home} />
      <Route path={'/aboutme'} exact={true} component={AboutPage} />
      <Route path={'/projects'} exact={true} component={Projects} />
      <Route path={'#contact'} component={Contact} />
      <Redirect to={'/'} />
    </Switch>
  );
};
