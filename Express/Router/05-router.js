const EXPRESS = require("express");
const APP = EXPRESS();

//importing the routes file
const ROUTES = require("./routes");

//
ROUTER.use(EXPRESS.json());
APP.use(ROUTES);

APP.listen(3000);
