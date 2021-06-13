const EXPRESS = require("express");
const APP = express();

APP.get("/getErrorOne", (req, res, next) => {
  next(Error("MessageOne"));
});

APP.get("/getErrorTwo", (req, res, next) => {
  next(Error("MessageTwo"));
});

APP.use((err, req, res, next) => {
  console.err(err.stack);
  res.status(500).send(err.message);
});

APP.use((err, req, res, next) => {
  console.log(err.stack);
  next(err);
});

APP.listen(4000);
