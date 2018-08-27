import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Loadable from "react-loadable";
import posed, { PoseGroup } from "react-pose";
import Error404 from "./pages/404";
import Loader from "./utils/Loader";

const Home = Loadable({
  loader: () => import("./pages/Home"),
  loading: Loader,
  delay: 300
});
const Skills = Loadable({
  loader: () => import("./pages/Skills"),
  loading: Loader,
  delay: 300
});
const Work = Loadable({
  loader: () => import("./pages/Work"),
  loading: Loader,
  delay: 300
});
const Portfolio = Loadable({
  loader: () => import("./pages/Portfolio"),
  loading: Loader,
  delay: 300
});

export { Home, Skills, Work, Portfolio };

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
    transition: {
      default: () => ({
        duration: 200
      })
    }
  },
  exit: {
    opacity: 0,
    transition: {
      default: () => ({
        duration: 200
      })
    }
  }
});

const Routes = ({ location }) => {
  return (
    <PoseGroup>
      <RoutesContainer key={location.pathname}>
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={Error404} />
        </Switch>
      </RoutesContainer>
    </PoseGroup>
  );
};

export default withRouter(Routes);
