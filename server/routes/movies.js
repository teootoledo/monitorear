var express = require("express");
var router = express.Router();

const moviesController = require("../controllers/moviesController");

/* GET home page. */
router.get("/", moviesController.list);

router.get("/detalle/batman", (req, res) => {
  res.render("error");
});

module.exports = router;
