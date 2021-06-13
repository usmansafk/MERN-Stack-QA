const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Step 2: create schema
//how the document should look like
const productSchema = new Schema({
  name: String,
  price: String,
});

module.exports = mongoose.model("Products", productSchema);
