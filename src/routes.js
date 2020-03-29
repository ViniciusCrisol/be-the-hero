import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import projects from "./pages/projects";
import BeTheHero from "./pages/projectsPages/BeTheHero";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/BeTheHero" component={BeTheHero} />
      <Route exact path="/projects" component={projects} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
