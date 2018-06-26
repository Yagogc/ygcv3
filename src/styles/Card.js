import React from "react";

import styled from "react-emotion";

const Card = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Card;

const Wrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.color.ui2};
  padding: ${props => (props.padded ? props.theme.ws.padding : 0)};
  margin-bottom: ${props => (props.marginBottom ? "10px" : 0)};
`;
