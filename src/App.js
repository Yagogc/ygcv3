import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import Header from "./components/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Error404 from "./pages/404";
import theme from "./styles/theme";
import Container from "./styles/Container";
import ScrollToTop from "./components/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ErrorBoundary from "./utils/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Router>
            <GoogleAnalytics>
              <ScrollToTop>
                <Header />
                <Container>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/work" component={Work} />
                    <Route path="/education" component={Education} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route component={Error404} />
                  </Switch>
                </Container>
              </ScrollToTop>
            </GoogleAnalytics>
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
