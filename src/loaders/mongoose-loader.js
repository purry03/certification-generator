const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);

  const certificationDB = await mongoose.createConnection(
    "mongodb+srv://admin:sSuTdTrGISX5GPeo@cluster0.qdt1v.mongodb.net/mainDB"
  );

  return { certificationDB };
};
