import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "react-emotion";

const Icon = props => {
  return (
    <IconWrapper
      icon={[props.iconType ? props.iconType : "fal", props.icon]}
      mright={props.mright}
    />
  );
};

export default Icon;

const IconWrapper = styled(FontAwesomeIcon)`
  ${"" /* margin-right: 5px; */} z-index: inherit;
  ${props => (props.mright ? `margin-right: 10px;` : "")};
`;
