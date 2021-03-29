const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const https = (require("https").globalAgent.options.rejectUnauthorized = false);
var path = require("path");

module.exports = async (app) => {
  const http = require("http").createServer(app);
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(express.static("public"));
  app.set("view engine", "ejs");
};
