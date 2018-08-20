import { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";
import Cookies from "js-cookie";

ReactGA.initialize("UA-123920754-1");

const tracking = location => {
  if (process.env.NODE_ENV === "production" && Cookies.get("CookieConsent")) {
    ReactGA.pageview(location.pathname);
  }
};
class GoogleAnalytics extends Component {
  componentDidMount() {
    tracking(this.props.location);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      tracking(this.props.location);
    }
  }

  render() {
    return this.props.children;
  }
}

const GADownload = action => {
  if (process.env.NODE_ENV === "production" && Cookies.get("CookieConsent")) {
    ReactGA.event({
      category: "Download",
      action
    });
  }
};

export default withRouter(GoogleAnalytics);

export { GADownload };
