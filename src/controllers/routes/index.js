const express = require("express");
const basic = require("./basic.js");

module.exports = async (app) => {
  app.use("/", basic);
};
