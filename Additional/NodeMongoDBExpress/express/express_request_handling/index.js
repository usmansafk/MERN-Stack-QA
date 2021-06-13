"use strict";

const EXPRESS = require("express");
const APP = EXPRESS();
const CORS = require("cors");

app.use(CORS());

app.use(express.json());
app.use((req, res, next) => {
  let currentTime = new Date();
  console.log(`The time is: ${currentTime}`);
  next();
});

//Create a request handler that listens for GET requests at /, make it send a response of 'Hello, my name is !'.
APP.get("/", (req, res) => res.send("Welcome, my name is Usman"));

//Create a non-constant array containing the names of everyone on your row.
let names = ["Usman", "Zain", "Ryan", "Raphael", "Sanru", "Phillip"];

//Create a request handler that listens at /getAll and responds with the whole array.
APP.get("/getAll", (req, res) => res.send(names));

//Create a request handler that fetches the name at the index specified in a URL parameter.
APP.get("/get/:id", (req, res) => res.send(names[req.params.id]));

//Create a request handler that deletes the name at the index specified in a URL parameter.
APP.get("/delete/:id", (req, res) => {
  res.send(names.splice(req.params.id, 1));
});

//Create a request handler that creates a new name in the array by sending a JSON object in the request body.Remember to add any necessary middleware.
APP.use(express.json());
APP.post("/create", (req, res) => {
  const name = req.body.name;
  names.push(name);
  res.status(201).send(`${name} has been added to the list`);
});

//Create a request handler that replaces a name in the array with a name specified in a query parameter at an index specified in a URL parameter.
APP.post("/replace/:index", (req, res) => {
  const oldName = names[index];
  const newName = req.query.name;
  const index = req.params.index;

  names[index] = newName;
  res.status(202).send(`${oldName} successfully replaced with ${newName}`);
});

//Implement some middleware before the routing that logs the current time to the console but still passes the request on to the next function.

app.listen(3000);
