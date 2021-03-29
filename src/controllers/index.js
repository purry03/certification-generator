const routes = require("./routes");

module.exports.init = async (expressApp) => {
  await routes(expressApp);
  console.log("Controller Initialized");
};
