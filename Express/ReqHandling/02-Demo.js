const express = require("express");
const app = express();

//Demo 2A
//app.get("/read", (req, res) => {console.log("fetch")});
//app.get("/name", (req, res) => res.send("Hello my name is Usman."));

//Demo 2B
const fruits = ["banana", "mango", "apple"];
app.get("/getAll", (req, res) => res.send(fruits));

//Demo 2C
// app.get("/get/:id", (req, res) => res.send(fruits[req.params.id]));

//Demo 2D
// app.get("/delete/:id", (req, res) => res.send(fruits.splice(req.params.id), 1));
//splice method-changes the content in an array by removing or changing an element in a array

//Demo 2E
app.use(express.json());

app.post("/create", (req, res) => {
  const fruitName = "banana";
  fruits.push(fruitName);
  res.status(201).send(`${fruitName} added successfully`);
  //curl -X POST "http://localhost:3000/create"
});

//Demo 2F
app.post("/replace/:index", (req, res) => {
  const fruitName = "apple";
  const index = req.params.index;
  const oldfruitName = fruits[index];
  fruits[index] = fruitName;
  res
    .status(202)
    .send(`${oldfruitName} added successfully replaced with ${fruitName}`);
  //curl -X POST "http://localhost:3000/replace/1"
});

app.listen(3000);
