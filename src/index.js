import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Typography from "./styles/Typography";
import Iconography from "./styles/Iconography";
import GlobalStyles from "./styles/Global";

Typography();
Iconography();
GlobalStyles();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
