const EXPRESS = require("express");
const APP = EXPRESS();

// Demo 3A
// const logger = (req, res, next) => {
//   console.log(new Date());
//   next();
// };

// APP.use(logger);

// APP.get("/", (req, res) => {
//   res.send("Hello World");
// });

//Demo 3B
//nesting next() middleware
const logger = (req, res, next) => {
  console.log(new Date());
  next();
};

APP.use(logger);

APP.get("/", logger, (req, res) => {
  res.send("Hello World");
});

APP.listen(3000);
