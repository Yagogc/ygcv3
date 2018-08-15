import Raven from "raven-js";
Raven.config(
  "https://63565b95157341098c55b9245c6d909b@sentry.io/1263071"
).install();

export default Raven;
