const express = require("express");
const router = express.Router();
const database = require("../../database");
const randomToken = require("random-token");
const crypto = require("crypto");
var QRCode = require("qrcode");
const path = require("path");
router.get("/", function (req, res) {
  res.render("index.ejs");
});

router.get("/certificate/:hash", function (req, res) {
  database.certification.verifyCertificate(
    req.params.hash,
    function (err, data) {
      if (data == null) {
        res.send("no record found");
      } else {
        res.send(
          "Certificate was issued to " +
            data.name +
            " for the event : " +
            data.eventName
        );
      }
    }
  );
});

router.post("/generate", function (req, res) {
  var id = randomToken(16);
  var name = req.body.name;
  var rollNumber = req.body.rollNumber;
  var eventName = req.body.eventName;
  var errorCorrectionLevel = req.body.error;
  QRCode.toDataURL(
    "https://certification-generator.herokuapp.com/certificate/" + id,
    { errorCorrectionLevel: errorCorrectionLevel },
    function (err, url) {
      var base64Data = url.replace(/^data:image\/png;base64,/, "");

      require("fs").writeFile(
        __basedir + "/../public/certifications/" + id + ".png",
        base64Data,
        "base64",
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  );

  database.certification.saveCertification(
    { id, name, rollNumber, eventName },
    function (err) {
      if (err) {
        res.send(500);
      } else {
        res.sendFile(
          path.resolve(__basedir + "/../public/certifications/" + id + ".png")
        );
      }
    }
  );
});

module.exports = router;
