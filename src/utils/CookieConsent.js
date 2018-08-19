import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Container from "./../styles/Container";
import Cookies from "js-cookie";
import posed from "react-pose";
class CookieConsent extends Component {
  state = {
    visible: false
  };

  static propTypes = {
    hideOnAccept: PropTypes.bool,
    onAccept: PropTypes.func,
    cookieName: PropTypes.string,
    debug: PropTypes.bool,
    expires: PropTypes.number
  };

  static defaultProps = {
    hideOnAccept: true,
    onAccept: () => {},
    cookieName: "CookieConsent",
    debug: false,
    expires: 365
  };
  componentDidMount() {
    const { cookieName, debug } = this.props;

    if (Cookies.get(cookieName) === undefined || debug) {
      this.setState({ visible: true });
    }
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    // remove listener if still set
    window.removeEventListener("scroll", this.handleScroll);
  }

  /**
   * checks whether scroll has exceeded set amount and fire accept if so.
   */
  handleScroll = () => {
    const docHeightQuarter = document.body.scrollHeight / 4;
    const scrolled = window.scrollY;
    const windowQuarter = window.innerHeight / 4;
    console.log({ scrolled });
    console.log({ docHeightQuarter });

    if (scrolled > windowQuarter && scrolled > docHeightQuarter) {
      this.accept();
    }
  };

  /**
   * Set a persistent cookie
   */
  accept = () => {
    const { cookieName, expires, hideOnAccept, onAccept } = this.props;

    console.log("Cookies accepted");
    // fire onAccept
    onAccept();
    // remove listener if set
    window.removeEventListener("scroll", this.handleScroll);

    Cookies.set(cookieName, true, { expires: expires });

    if (hideOnAccept) {
      this.setState({ visible: false });
    }
  };

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <Modal>
        <ContainerWrapper>
          <Wrapper initialPose="hidden" pose="visible">
            <TopBar />
            <Content>
              <P>
                This website uses cookies to ensure you get the best experience.
              </P>
              <Button
                onClick={() => {
                  this.accept();
                }}
              >
                Accept
              </Button>
            </Content>
          </Wrapper>
        </ContainerWrapper>
      </Modal>
    );
  }
}

export default CookieConsent;

const Modal = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  padding: 60px 0;
  pointer-events: none;
  @media (${props => props.theme.mq.desktop}) {
    padding-bottom: 0px;
  }
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  align-content: flex-end;
`;
const CookieWrapper = styled.div`
  background: ${props => props.theme.color.ui2};
  pointer-events: all;
  z-index: 50;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const TopBar = styled.div`
  height: 4px;
  width: 100%;
  background: ${props => props.theme.gradient()};
`;
const Content = styled.div`
  padding: ${props => props.theme.ws.padding};
  display: flex;
  font-size: 14px;
  align-items: center;
`;

const Button = styled.button`
  background: ${props => props.theme.color.ui4};
  padding: ${props => props.theme.ws.padding};
  display: flex;
  color: ${props => props.theme.color.text1};
  font-weight: bold;
  border: none;
`;
const P = styled.p`
  flex-grow: 1;
  margin-right: 10px;
`;

const config = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      default: props => ({
        duration: 1000
      })
    }
  },
  hidden: {
    opacity: 0,
    y: 100
  }
};
const Wrapper = posed(CookieWrapper)(config);
