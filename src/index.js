const express = require("express");
const app = express();

app.listen(process.env.PORT || 80, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server Online`);
});

app.get("/", function (res, res) {
  res.setEncoding("hello");
});
