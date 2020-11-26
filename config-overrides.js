const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  return alias({
    "@src": "src",
    "@context": "src/context",
    "@styles": "src/styles",
    "@components": "src/components",
    "@pages": "src/pages",
    "@assets": "src/assets",
    "@content": "src/content",
  })(config);
};
