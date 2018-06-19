import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Error404 from "./pages/404";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route path="/education" component={Education} />
            <Route path="/portfolio" component={Portfolio} />
            <Route component={Error404} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
