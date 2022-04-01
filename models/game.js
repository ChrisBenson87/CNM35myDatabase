const mongoose = require("mongoose");

const Game = mongoose.model("Game", {
  name: { type: String, unique: true },
  releaseDate: { type: Number }
});

module.exports = Game