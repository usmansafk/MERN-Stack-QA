const EXPRESS = require("express");
const APP = EXPRESS();

//Method 1
// APP.get("/error", (req, res, next) => {
//   const ERR = new Error("There is an error!");
//   next(ERR);
// });

//Method 2
APP.get("/error", (req, res, next) => {
  throw new Error("Another err msg");
});

const errorLogger = (err, req, res, next) => {
  console.log(err.stack);
  next(err);
};
APP.use(errorLogger);

const sendError = (err, req, res) => {
  res.status(500).send(err.message);
};
APP.use(sendError);

APP.listen(4000);

/*--------------------------------------------
Edsels code:
const EXPRESS = require('express');

const APP = EXPRESS();

// const ERR = new Error("There is an error!!!");

//Method 1

// APP.get('/error', (req, res, next) => {

//     const ERR = new Error("Uusseful error message");

//     next(ERR);

// })



//Method 2

APP.get('/error', (req, res, next) => {

    throw new Error('Another error message');

})



const ERRORLOGGER = (err, req, res, next) => {

    console.log(err.stack);

    next(err);

}

APP.use(ERRORLOGGER);



const SENDERROR = (err, req, res) => {

    res.status(500).send(err.message);

}

APP.use(SENDERROR);



APP.listen(4000);

*/
