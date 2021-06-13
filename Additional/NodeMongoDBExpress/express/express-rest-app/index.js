const express = require("express");
const mongoose = require("mongoose");
const app = express();

const routes = require("./routes");

//set up
mongoose
  .connect("mongodb://localhost:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();
    app.use("/api", routes);
    app.listen(5000, () => {
      console.log("Server has started");
    });
  });
