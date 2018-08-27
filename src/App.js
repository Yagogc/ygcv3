import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import Header from "./components/Header";
import theme from "./styles/theme";
import Container from "./styles/Container";
import ScrollToTop from "./components/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ErrorBoundary from "./utils/ErrorBoundary";
import CookieConsent from "./utils/CookieConsent";
import Navigation from "./components/Navigation";
import { Mobile } from "./utils/MediaQuery";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Router>
            <GoogleAnalytics>
              <ScrollToTop>
                <Header />
                <Container main>
                  <Routes />
                </Container>
                <Mobile>
                  <Navigation mobile />
                </Mobile>
                <CookieConsent />
              </ScrollToTop>
            </GoogleAnalytics>
          </Router>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
