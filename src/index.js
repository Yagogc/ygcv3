import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "react-emotion";
import color from "./styles/colors";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

injectGlobal`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
  }
  html {
    background: ${color.ui1};
    color: ${color.text1}
  }
  body {
    padding: 70px 0;
  }
`;
