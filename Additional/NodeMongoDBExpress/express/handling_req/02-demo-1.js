const express = require('express');
const app = express();

//Demo 2A---------------------------
app.get('/read', (req, res) => { console.log('fetch') });
//curl http://localhost:3000/read

app.get('/name', (req, res) => { res.send('Hello, my name is Usman') })
//curl http://localhost:3000/name


//Demo 2B---------------------------
const fruits = ['banana', 'mango', 'durian'];
app.get('/getAll', (req, res) => {​​​​ res.send(fruits) }​​​​);
//curl http://localhost:3000/getAll

//Demo 2C---------------------------
app.get('/get/:id', (req, res) => {​​​​ res.send(fruits[req.params.id]) }​​​​);
//curl http://localhost:3000/get/1

app.get('/delete/:id', (req, res) => {
    res.send(fruits.splice(req.params.id, 1))
});

//Demo 2D---------------------------
app.use(express.json());

app.post('/create', (req, res) => {
    const name = "banana"
    fruits.push(name);
    res.status(201).send(`${name} added successfully`);
})
//curl -X POST "http://localhost:3000/create"

//demo 2E
app.post('/replace/:index', (req, res) => {
    const name = 'apple';
    const index = req.params.index;
    const old = fruits[index];
    fruits[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
})
//curl -X POST "http://localhost:3000/replace/1

app.listen(3000);


// //Demo2B
// const daysOfTheWeek = ["Monday", "Tuesday", "Friday"];

// app.get("/getAll", (req, res) => {
//   res.send(daysOfTheWeek);
// });
// //curl http://localhost:3000/getAll

// //Demo2C
// app.get("/get/:id", (req, res) => {
//   res.send("Random day:");
//   res.send(fruits[req.params.id]);
// });
// //curl http://localhost:3000/get/1

// app.get("/delete/:id", (req, res) => {
//   res.send(daysOfTheWeek.splice(req.params.id, 1));
// });
// //curl http://localhost:3000/delete/0
// //curl http://localhost:3000/getAll

// //Demo 2D

// app.use(express.json());

// app.post("/create", (req, res) => {
//   const name = "banana";

//   fruits.push(name);

//   res.status(201).send(`${name} added successfully `);
// });

// //curl -X POST "http://localhost:3000/create"

// //demo 2E

// app.post("/replace/:index", (req, res) => {
//   const name = "apple";

//   const index = req.params.index;

//   const old = fruits[index];

//   fruits[index] = name;

//   res.status(202).send(`${old} successfully replaced with ${name}`);
// });

// //curl -X POST "http://localhost:3000/replace/1

// app.listen(3000);

// app.listen(3000);

// //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
