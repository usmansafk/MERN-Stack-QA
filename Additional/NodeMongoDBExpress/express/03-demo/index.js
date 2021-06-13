const EXPRESS = require("express");
const APP = EXPRESS();

//DEMO 3A
const logger = (req, res, next) => {
  console.log(new Date());
  next();
};

APP.use(logger);

APP.get("/", (req, res) => {
  res.send("Helloooo");
});

//------------------------------------------------

//DEMO 3B
const logger = (req, res, next) => {
  console.log(new Date());
  next();
};

APP.use(logger);

APP.get("/", logger, (req, res) => {
  res.send("Hello 03-demo-1B!");
});

APP.listen(3000);
