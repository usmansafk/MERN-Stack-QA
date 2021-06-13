const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const MOVIE_SCHEMA = new SCHEMA({
  title: String,
  description: String,
  date_released: Number,
});

module.exports = MONGOOSE.model("Movies", MOVIE_SCHEMA);
