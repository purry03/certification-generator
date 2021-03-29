const modelLoader = require("../models");

module.exports.verifyCertificate = async function (hash, callbackFn) {
  modelLoader.models.certification.find(
    { hash: hash },
    function (err, certifications) {
      if (err) {
        callbackFn(true, err);
      } else {
        callbackFn(false, certifications);
      }
    }
  );
};

module.exports.saveCertification = async function (userData, callbackFn) {
  const toSave = modelLoader.models.certification({
    id: userData.id,
    name: userData.name,
    rollNumber: userData.rollNumber,
    eventName: userData.eventName,
    hash: userData.hash,
  });

  toSave.save(function (err) {
    if (err) {
      console.log(err);
      callbackFn(err);
    } else {
      callbackFn(false);
    }
  });
};
