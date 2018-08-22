import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";

import Icon from "../styles/Icon";
import Navigation from "./Navigation";
import Container from "../styles/Container";
import logo40 from "../assets/logo-40.jpg";
import logo80 from "../assets/logo-80.jpg";
import { GADownload } from "./GoogleAnalytics";
import posed from "react-pose";
import { Desktop, Mobile } from "../utils/MediaQuery";
import Name from "./Name";

const Header = () => {
  return (
    <Wrapper initialPose="exit" pose="enter">
      <Container horizontal header>
        <InnerWrapper>
          <ImgLink to="/">
            <picture>
              <source media="(max-width: 768px)" srcSet={logo80} />
              <source media="(min-width: 768px)" srcSet={logo40} />
              <Img src={logo40} alt="Logo" />
            </picture>
          </ImgLink>
          <Mobile>
            <div>
              <Name />
            </div>
          </Mobile>
          <Desktop>
            <Navigation />
          </Desktop>
          <Button
            href="https://yagogc.github.io/_public/CV_YagoGonzalez.pdf"
            onClick={() => GADownload("CV")}
          >
            <Icon icon="file-pdf" />
            <span>CV</span>
          </Button>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: sticky;
  top: -0.5px;
  width: 100%;
  height: 60px;
  background: ${props => props.theme.color.ui4};
  color: ${props => props.theme.color.text1};
  box-shadow: inset 0 -1px 0px 0px rgba(255, 255, 255, 0.1);
  z-index: 100;
  overflow: hidden;
`;
const InnerWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
const Button = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.text1};
  text-decoration: none;
  padding: 5px 20px;
  background: linear-gradient(
    135deg,
    ${props => props.theme.color.brand3} 0%,
    ${props => props.theme.color.brand4} 100%
  );
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 0 0px 1px rgba(255, 255, 255, 0.4);

  > span {
    margin-left: 5px;
    font-weight: bold;
  }
  &:after {
    content: "";
    position: absolute;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    top: 0;
    left: 0;
    height: 300%;
    width: 30px;
    transform: rotate(45deg) translateY(-50%) translateX(-335%);
    transform-origin: center;
  }
  &:hover:after {
    transform: rotate(45deg) translateY(-50%) translateX(335%);
    transition: all 0.5s ease-in-out;
  }
`;

const ImgLink = styled(Link)`
  height: 40px;
`;
const Img = styled.img`
  height: 100%;
`;

const config = {
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      default: () => ({
        duration: 500
      })
    }
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      default: () => ({
        duration: 500
      })
    }
  }
};
const Wrapper = posed(HeaderWrapper)(config);
