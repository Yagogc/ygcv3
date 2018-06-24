import React from "react";

import styled from "react-emotion";
import { withTheme } from "emotion-theming";

import Icon from "./Icon";

const SocialCard = props => {
  const color = props => {
    switch (props.color) {
      case "facebook":
        return props.theme.brands.facebook;
      case "github":
        return props.theme.brands.github;
      case "google":
        return props.theme.brands.google;
      case "linkedin":
        return props.theme.brands.linkedin;
      default:
        return undefined;
    }
  };
  return (
    <CardWrapper {...props} brand={color(props)} href="#">
      <Icon icon={props.icon} iconType="fab" />
      <CardTitle>{props.children}</CardTitle>
    </CardWrapper>
  );
};

export default withTheme(SocialCard);

const CardWrapper = styled.a`
  width: 100%;
  min-width: 175px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color.text1};
  text-decoration: none;
  background: ${props => (props.brand ? props.brand : "none")};
  padding: ${props => (props.padded ? "10px" : 0)};
  margin: 10px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
`;

const CardTitle = styled.span`
  font-weight: bold;
  margin-left: 5px;
`;
