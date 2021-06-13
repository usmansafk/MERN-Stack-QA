const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Step 4: install routes
const routes = require("./routes");

//Step 1: set up mongoose -
//mongoose is just a mongodb wrapper for nodejs -
//allows us to interact with mongodb db
mongoose
  .connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);
    app.listen(5000, () => {
      console.log("server has started");
    });
  });
