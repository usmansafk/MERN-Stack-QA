const express = require("express");
const router = express.Router();

const Product = require("./models/product");

// GET-ALL products
router.get("/products", async (req, res) => {
  const prod = await Product.find();
  res.send(prod);
});

//Create Products
router.post("/products", async (req, res) => {
  const prod = new Product({
    name: "carrots",
    price: 1.23,
  });
  await prod.save();
  res.send(prod);
});

//DELETE products
router.delete("/delete/:id", async (req, res) => {
  try {
    const prod = await Product.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.log(err.stack);
    res.status(404).send(err.message);
  }
});

module.exports = router;
