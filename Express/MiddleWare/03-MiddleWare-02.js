const EXPRESS = require("express");
const CORS = require("cors");
const APP = EXPRESS();

APP.use(CORS());

APP.get("/products:/id", (req, res, next) => {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

APP.listen(3001, () => {
  console.log("CORS-enabled web server listening on port 3001");
});
