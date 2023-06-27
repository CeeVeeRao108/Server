const mongoose = require("mongoose");

const WinnerSchema = mongoose.Schema({
  name: String,
  age: Number,
  score: Number,
  winner: Boolean,
});

const Winner = mongoose.model("Winner", WinnerSchema);

module.exports = Winner;
