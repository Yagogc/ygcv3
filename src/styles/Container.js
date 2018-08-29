import React from "react";

import styled from "react-emotion";

const Container = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  width: 100%;
  min-height: ${({ main }) => (main ? "calc(100vh - 120px)" : "100%")};
  height: 100%;
  margin: 0 auto;
  max-width: ${props => props.theme.container.width};
  padding-left: ${props =>
    props.vertical ? 0 : props.theme.container.padding};
  padding-right: ${props =>
    props.vertical || props.header ? 0 : props.theme.container.padding};
  padding-top: ${props =>
    props.horizontal ? 0 : props.theme.container.padding};
  padding-bottom: ${props =>
    props.horizontal ? 0 : props.theme.container.padding};

  @media (${props => props.theme.mq.desktop}) {
    ${props =>
      props.header ? `padding-right: ${props.theme.container.padding}` : ""};
    ${props => (props.main ? "calc(100vh - 60px)" : "100%")};
  }
`;
