{
  const db = require("../database/models");

  const moviesController = {
    list: async (req, res) => {
      const movies = await db.Movie.findAll();
      res.render("index", {
        movies,
      });
    },
  };

  module.exports = moviesController;
}
