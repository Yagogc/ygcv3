import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "react-emotion";

const Icon = props => {
  return <IconWrapper icon={props.icon} />;
};

export default Icon;

const IconWrapper = styled(FontAwesomeIcon)`
  margin-right: 5px;
  z-index: inherit;
`;
