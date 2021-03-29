const express = require("express");
const mongoose = require("mongoose");
const loaders = require("./loaders");
const modelLoader = require("./models");
const controllers = require("./controllers");

async function startServer() {
  const app = express();
  const modules = await loaders.init(app);
  await modelLoader(modules.mongooseDB);
  await controllers.init(app);
  app.listen(process.env.PORT || 80, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server Online`);
  });
}

startServer();
global.__basedir = __dirname;
