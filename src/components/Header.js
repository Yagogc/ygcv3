import React from "react";
import styled from "react-emotion";

import color from "./../styles/colors";
import Icon from "../styles/Icon";
import Navigation from "./Navigation";
import Container from "../styles/Container";

const Header = () => {
  return (
    <Wrapper>
      <Container horizontal header>
        <InnerWrapper>
          <span>Yago Gonzalez</span>
          <Navigation />
          <Button href="#">
            <Icon icon="file-pdf" />
            <span>CV</span>
          </Button>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${props => props.theme.color.ui4};
  color: ${color.text1};
  box-shadow: inset 0 -1px 0px 0px rgba(255, 255, 255, 0.1);
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
  color: ${color.text1};
  text-decoration: none;
  padding: 5px 20px;
  background: linear-gradient(135deg, ${color.brand3} 0%, ${color.brand4} 100%);
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
