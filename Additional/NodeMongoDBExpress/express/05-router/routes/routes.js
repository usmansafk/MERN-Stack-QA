const ROUTER = require("express");

let names = ["Usman", "Zain", "Ryan", "Raphael", "Sanru", "Phillip"];

ROUTER.get("/", (req, res) => res.send("Welcome, my name is Usman"));

ROUTER.get("/getAll", (req, res) => res.send(names));

ROUTER.get("/get/:id", (req, res) => res.send(names[req.params.id]));

ROUTER.get("/delete/:id", (req, res) => {
  res.send(names.splice(req.params.id, 1));
});

ROUTER.post("/create", (req, res) => {
  const name = req.body.name;
  names.push(name);
  res.status(201).send(`${name} has been added to the list`);
});

ROUTER.post("/replace/:index", (req, res) => {
  const oldName = names[index];
  const name = req.query.name;
  const index = req.params.index;
  names[index] = newName;

  res.status(202).send(`${oldName} successfully replaced with ${name}`);
});

module.exports = router;
