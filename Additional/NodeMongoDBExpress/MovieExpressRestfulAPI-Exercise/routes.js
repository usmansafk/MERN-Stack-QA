"use strict";

const ROUTER = require("express").Router();
const PRODUCT = require("./models/movies");

// Post Requests
ROUTER.post("/create", async (req, res) => {
  const NEW_OBJ = {
    title: req.body.title,
    description: req.body.description,
    dateReleased: req.body.dateReleased,
  };
  const DOC = new MOVIE(NEW_OBJ); // New document using model
  try {
    await DOC.save();
    res.status(201).send(NEW_OBJ);
  } catch (err) {
    console.log(err.stack);
    res.status(500).send(err.message);
  }
});

// Get All (200 is default HTTP status code)
ROUTER.get("/getAll", async (req, res) => {
  try {
    const MOVIES = await PRODUCT.find();
    res.send(MOVIES);
  } catch (err) {
    console.log(err.stack);
    res.status(500).send(err.message);
  }
});

ROUTER.get("/get/:id", async (req, res) => {
  try {
    const FOUND = await MOVIE.findById(req.params.id);
    res.send(FOUND);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Can't locate this movie with that ID!");
  }
});

ROUTER.put("/update/:id", async (req, res) => {
  try {
    const UPDATED = await MOVIE.findByIdAndUpdate(
      { _id: req.params.id },
      { name: req.query.name },
      { new: true }
    );
    res.status(202).send(UPDATED);
  } catch (err) {
    console.log(err.stack);
    res.status(404).send("Can't locate this movie with that ID!");
  }
});

// Export
module.exports = ROUTER;
