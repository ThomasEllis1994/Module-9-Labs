const dbConnect = require("./dbConnect");
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

let postroutes = require("./routes/postRoutes");
app.use("/api/posts", postroutes);

let commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);

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
