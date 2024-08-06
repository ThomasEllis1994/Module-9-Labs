const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
    console.log("Retrieving pokedex data");
    Controllers.pokemonController.getPokemonData(req, res);
});

router.get("/:pokemon", (req, res) => {
    Controllers.pokemonController.getPokemonMoves(req, res);
});

router.get("/totodile", (req, res) => {
    Controllers.pokemonController.getTotodileFacts(req, res);
});

module.exports = router;
