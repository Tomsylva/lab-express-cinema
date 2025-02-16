const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find({}).then((allMovies) => {
    console.log("Movies found: ", allMovies);
    res.render("movies", { allMovies: allMovies });
  });
});

router.get("/movies/:movieId", (req, res) => {
  Movie.findOne({ _id: req.params.movieId }).then((singleMovie) => {
    console.log("Single Movie: ", singleMovie);
    res.render("single-movie", { singleMovie: singleMovie });
  });
});

module.exports = router;
