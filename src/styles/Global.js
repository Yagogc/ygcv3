import { injectGlobal } from "emotion";

import theme from "./theme";

const GlobalStyles = () => {
  injectGlobal`
	* {
		margin: 0;
		padding: 0;
    box-sizing: border-box;
    font-family: "Open sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  html {
    background: ${theme.color.ui1};
    color: ${theme.color.text1}
  }
`;
};

export default GlobalStyles;
