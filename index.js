require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const mongoose = require("mongoose");
const Game = require("./models/game");

(async () => {
  mongoose.connect(process.env.MONGO_URI);

  if (argv.add) {
    const game = new Game({ name: argv.name, publisher: argv.publisher, consoleRelease: argv.consoleRelease, releaseYear: argv.releaseYear });
    await game.save();
    console.log(game);
  } else if (argv.find) {
    const findGame = await Game.find({});
    console.log(findGame);
  } else if (argv.delete) {
    const deleteGame = await Game.deleteOne({
      name: argv.name,
    });
    console.log(deleteGame);
  } else if (argv.update) {
    console.log(argv.name)
    const updateGame = await Game.findOneAndUpdate(
      { name: argv.name[0] },
      { name: argv.name[1], publisher: argv.publisher, consoleRelease: argv.consoleRelease, releaseYear: parseInt(argv.releaseYear) },
      { new: true }
    );
    console.log(updateGame);
  }

  mongoose.connection.close();
})();
