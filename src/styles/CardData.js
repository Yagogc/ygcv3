import React from "react";

import styled from "react-emotion";

import Icon from "./Icon";

const CardData = props => {
  return (
    <CardWrapper {...props}>
      <Icon icon={props.icon} />
      {props.url ? (
        <CardTitleLink href={props.url}>{props.children}</CardTitleLink>
      ) : (
        <CardTitle>{props.children}</CardTitle>
      )}
    </CardWrapper>
  );
};

export default CardData;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.text1};
  text-decoration: none;
  background: ${props => props.theme.color.ui3};
  padding: ${props => (props.padded ? "5px 10px" : 0)};
`;

const CardTitle = styled.span`
  margin-left: 5px;
  width: 100%;
  text-align: center;
`;

const CardTitleLink = styled.a`
  margin-left: 5px;
  width: 100%;
  text-align: center;
  color: inherit;
  text-decoration: none;
`;
