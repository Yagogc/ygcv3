import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import posed, { PoseGroup } from "react-pose";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Error404 from "./pages/404";

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
});

const Routes = ({ location }) => {
  return (
    <PoseGroup>
      <RoutesContainer key={location.pathname}>
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route path="/education" component={Education} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={Error404} />
        </Switch>
      </RoutesContainer>
    </PoseGroup>
  );
};

export default withRouter(Routes);
