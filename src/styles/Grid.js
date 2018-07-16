import React from "react";

import styled from "react-emotion";

const Grid = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Grid;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props =>
    props.mColumns ? props.mColumns : "1"}, 1fr);
  grid-gap: 10px;
  
  @media (${props => props.theme.mq.desktop}) {
    grid-template-columns: repeat(${props =>
      props.dColumns ? props.dColumns : "1"}, 1fr)
`;
