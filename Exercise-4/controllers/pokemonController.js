const axios = require("axios");

const pokemonAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
});

const getPokemonData = async (req, res) => {
    try {
        const response = await pokemonAPI.get("/");
        res.json({ result: 200, data: response.data });
    } catch (error) {
        console.error("Error finding pokemon", error);
        res.status(500).json({ result: 500, error: error.message });
    }
};

const getPokemonMoves = async (req, res) => {
    try {
        const { pokemon } = req.params;
        const response = await pokemonAPI.get(`/${pokemon}`);
        res.send({ result: 200, data: response.data.moves });
    } catch (error) {
        console.log(error);
        res.status(404).send({ result: 404, error: "Pokemon Not Found" });
    }
};

const getTotodileFacts = async (req, res) => {
    try {
        const response = await pokemonAPI.get(`/totodile`);
        res.send({ result: 200, data: response.data.name });
    } catch (error) {
        console.log(error);
        res.status(404).send({ result: 404, error: "Facts not found" });
    }
};

module.exports = {
    getPokemonData,
    getPokemonMoves,
    getTotodileFacts,
};
