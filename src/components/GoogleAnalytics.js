import { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

ReactGA.initialize("UA-123920754-1");

const tracking = location => {
  if (process.env.NODE_ENV === "production") {
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

export default withRouter(GoogleAnalytics);
