const EXPRESS = require("express");
const APP = EXPRESS();

//Method 1- passing error to error handling middleware
// APP.get("/error", (req, res, next) => {
//   const ERR = new Error("Useful error message...");
//   next(ERR);
// });

//Method 2- using the throw method
APP.get("/error", (req, res, next) => {
  throw new Error("Another useful error message...");
});

//creating the middleware:
const ERRORLOGGER = (err, req, res, next) => {
  console.log(err.stack);
  next(err);
};

APP.use(ERRORLOGGER);

const ERRORLOGGERS = (err, req, res, next) => {
  console.log(err.stack);
  next(err);
};

const SENDERROR = (err, req, res) => {
  res.status(500).send(err.message);
};

APP.use(SENDERROR);

APP.listen(4000);
