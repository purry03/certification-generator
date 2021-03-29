const certificationModelLoader = require("./certification.js");

module.exports = async (mongooseDB) => {
  const certification = await certificationModelLoader(
    mongooseDB.certificationDB
  );
  module.exports.models = { certification };
};
