const express = require("express");
const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello Usmans World");
//   console.log("Server is up");
// });

app.get("/", (req, res) => {
  res.send("Hello Usmans World!!");
  console.log("Server is up");
});

app.listen(3000);
