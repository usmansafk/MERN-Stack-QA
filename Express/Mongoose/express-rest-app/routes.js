const express = require("express");
const router = express.Router();

//pass in the model
const Product = require("./models/Products");

//Step 3:
//Get all products
router.get("/products", async (req, res) => {
  const prod = await Product.find();
  res.send(prod);
});

//curl http://localhost:5000/api/products

//Create products
router.post("/products", async (req, res) => {
  const prod = new Products({
    name: "carrots",
    price: 1.23,
  });
  await prod.save();
  res.send(prod);
});

//curl -X POST -H "Content-Type:application/json" localhost:5000/api/products

module.exports = router;
