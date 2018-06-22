import React from "react";
import styled from "react-emotion";
import { Link as LinkC } from "react-router-dom";
import color from "./../styles/colors";
import Icon from "../styles/Icon";

const Navigation = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Icon icon="home" />
        <LinkTitle>Home</LinkTitle>
      </Link>
      <Link to="/skills">
        <Icon icon="code" />
        <LinkTitle>Skills</LinkTitle>
      </Link>
      <Link to="/work">
        <Icon icon="briefcase" />
        <LinkTitle>Work</LinkTitle>
      </Link>
      <Link to="/education">
        <Icon icon="graduation-cap" />
        <LinkTitle>Education</LinkTitle>
      </Link>
      <Link to="/portfolio">
        <Icon icon="cubes" />
        <LinkTitle>Portfolio</LinkTitle>
      </Link>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.nav`
  height: 100%;
  display: flex;
`;

const LinkTitle = styled.span`
  z-index: 5;
`;
const Link = styled(LinkC)`
  color: ${color.text1};
  text-decoration: none;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;

  &:hover::after {
    height: 100%;
    top: 0;
    /* transform: translateY(0); */
    /* box-shadow: inset 0 0 0px 1px rgba(255, 255, 255, 0.4); */
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    background: linear-gradient(
      135deg,
      ${color.brand3} 0%,
      ${color.brand4} 100%
    );
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    /* transform: translateY(50%); */
    transition: all 0.15s ease-in-out;
    z-index: 4;
  }
`;
