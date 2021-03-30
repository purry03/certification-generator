const mongoose = require("mongoose");

module.exports = async (mainDB) => {
  const certificateSchema = mongoose.Schema({
    id: String,
    name: String,
    rollNumber: String,
    eventName: String,
  });

  const Main = mainDB.model("Certificate", certificateSchema);
  return Main;
};
