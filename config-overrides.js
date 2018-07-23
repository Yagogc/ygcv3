const rewirePreloadPlugin = require("react-app-rewire-preload-plugin");
const { rewireEmotion } = require("react-app-rewire-emotion");

// Add preloading support
module.exports = function override(config, env) {
  config = rewirePreloadPlugin(config, env);
  config = rewireEmotion(config, env, { inline: true });

  //do stuff with the webpack config...
  return config;
};
