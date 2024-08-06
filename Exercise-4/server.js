const dbConnect = require("./dbConnect");
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

let postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

let commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);

let pokemonRoutes = require("./routes/pokemonRoutes");
app.use("/api/pokemon", pokemonRoutes);

// parse requests of content-type -application / json;

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port
${PORT}.`);
});
