import React from "react";
import { withTheme } from "emotion-theming";
import MediaQuery from "react-responsive";

const MobileC = props => {
  return (
    <MediaQuery query={`(${props.theme.mq.mobile})`}>
      {props.children}
    </MediaQuery>
  );
};
const Mobile = withTheme(MobileC);
const DesktopC = props => {
  return (
    <MediaQuery query={`(${props.theme.mq.desktop})`}>
      {props.children}
    </MediaQuery>
  );
};
const Desktop = withTheme(DesktopC);
export { Mobile, Desktop };
