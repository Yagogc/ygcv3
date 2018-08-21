import React from "react";
import styled from "react-emotion";
import { Link as LinkC, withRouter } from "react-router-dom";
import Icon from "../styles/Icon";
import posed from "react-pose";

const isActive = (path, currentPath) =>
  path === currentPath ? "true" : undefined;

const Navigation = props => {
  const { pathname } = props.location;
  const { mobile } = props;

  return (
    <Wrapper initialPose={mobile ? "exit" : "enter"} pose="enter">
      <Link to="/" current={isActive("/", pathname)}>
        <Icon icon="user-circle" />
        <LinkTitle>Home</LinkTitle>
      </Link>
      <Link to="/skills" current={isActive("/skills", pathname)}>
        <Icon icon="code" />
        <LinkTitle>Skills</LinkTitle>
      </Link>
      <Link to="/work" current={isActive("/work", pathname)}>
        <Icon icon="briefcase" />
        <LinkTitle>Work</LinkTitle>
      </Link>
      <Link to="/portfolio" current={isActive("/portfolio", pathname)}>
        <Icon icon="folder" />
        <LinkTitle>Portfolio</LinkTitle>
      </Link>
    </Wrapper>
  );
};

export default withRouter(Navigation);

const NavWrapper = styled.nav`
  height: 100%;
  display: flex;
  @media (${props => props.theme.mq.mobile}) {
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    background: ${props => props.theme.color.ui4};
    color: ${props => props.theme.color.text1};
    box-shadow: inset 0 1px 0px 0px rgba(255, 255, 255, 0.1);
    z-index: 100;
  }
`;

const LinkTitle = styled.span`
  z-index: 5;
  margin-left: 5px;

  @media (${props => props.theme.mq.mobile}) {
    font-size: 11px;
    margin-left: 0;
    margin-top: 5px;
  }
`;
const Link = styled(LinkC)`
  color: ${props => props.theme.color.text1};
  text-decoration: none;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
  @media (${props => props.theme.mq.mobile}) {
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 20%;
    font-size: 18px;
    padding: 5px;
  }
  &:hover::after {
    height: 4px;
    top: 0;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      135deg,
      ${props => props.theme.color.brand3} 0%,
      ${props => props.theme.color.brand4} 100%
    );
    background-repeat: no-repeat;
    width: 100%;
    height: ${props => (props.current ? "4px" : 0)};
    /* transform: translateY(50%); */
    transition: all 0.15s ease-in-out;
    z-index: 4;
  }
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
    y: 100,
    transition: {
      default: () => ({
        duration: 500
      })
    }
  }
};

const Wrapper = posed(NavWrapper)(config);
