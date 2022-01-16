import "@cypress/code-coverage/support";
module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);

  return config;
};
