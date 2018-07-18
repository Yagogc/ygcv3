import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "react-emotion";

const Icon = props => {
  return (
    <IconWrapper
      icon={[props.iconType ? props.iconType : "fal", props.icon]}
      mright={props.mright}
      mleft={props.mleft}
    />
  );
};

export default Icon;

const IconWrapper = styled(FontAwesomeIcon)`
  z-index: inherit;
  ${props => (props.mright ? `margin-right: 10px;` : "")};
  ${props => (props.mleft ? `margin-left: 10px;` : "")};
`;
