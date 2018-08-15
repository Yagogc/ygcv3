import React, { Component } from "react";
import Raven from "./Sentry";
import Icon from "../styles/Icon";
import styled from "react-emotion";

class ErrorBoundary extends Component {
  state = { error: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Raven.captureException(error, { extra: errorInfo });
  }

  handleClick = () => {
    Raven.lastEventId();
    Raven.showReportDialog();
  };

  render() {
    if (this.state.error) {
      return (
        <Container>
          <Wrapper onClick={() => this.handleClick()}>
            <IconWrapper>
              <Icon icon="exclamation-triangle" />
            </IconWrapper>
            <p>Sorry! — something's gone wrong.</p>
            <p>I've been notified, but click here fill out a report.</p>
          </Wrapper>
        </Container>
      );
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  font-size: 100px;
  padding-bottom: 10px;
`;
