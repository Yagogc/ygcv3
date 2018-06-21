import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "react-emotion";
import color from "./styles/colors";
import Typography from "./styles/Typography";

Typography();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

injectGlobal`
	* {
		margin: 0;
		padding: 0;
    box-sizing: border-box;
    font-family: "Open sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
  html {
    background: ${color.ui1};
    color: ${color.text1}
  }
  body {
    padding: 70px 0;
  }
`;
