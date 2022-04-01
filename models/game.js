const mongoose = require("mongoose");

const Game = mongoose.model("Game", {
  name: { type: String, unique: true },
  publisher: { type: String, unique: true },
  consoleRelease: { type: String, unique: true },
  releaseYear: { type: Number }
});

module.exports = Game